// @flow strict

import * as React from 'react';
import { Animated, Dimensions, Easing } from 'react-native';

import Confetti from './components/confetti';
import {randomValue} from './utils';

type Props = {|
  count: number,
  origin: {
    x: number,
    y: number
  },
  explosionSpeed?: number,
  fallSpeed?: number,
  colors?: Array<string>,
  fadeOut?: boolean
|};

type Item = {|
  leftDelta: number,
  topDelta: number,
  swingDelta: number,
  speedDelta: {
    rotateX: number,
    rotateY: number,
    rotateZ: number
  }
|};

type State = {|
  items?: Array<Item>
|};

const TOP_MIN = 0.7;
const DEFAULT_COLORS: Array<string> =[
  '#e67e22',
  '#2ecc71',
  '#3498db',
  '#84AAC2',
  '#E6D68D',
  '#F67933',
  '#42A858',
  '#4F50A2',
  '#A86BB7',
  '#e74c3c',
  '#1abc9c'
];

class Explosion extends React.PureComponent<Props, State> {
  props: Props;
  state: State;

  animation: Animated.Value = new Animated.Value(0);

  componentDidMount = () => {
    this.calculateItems();
  };

  calculateItems = () => {
    const { count } = this.props;
    const items: Array<Item> = [];

    Array(count).fill().map(() => {
      const item: Item = {
        leftDelta: randomValue(0, 1),
        topDelta: randomValue(TOP_MIN, 1),
        swingDelta: randomValue(0.2, 1),
        speedDelta: {
          rotateX: randomValue(0.3, 1),
          rotateY: randomValue(0.3, 1),
          rotateZ: randomValue(0.3, 1)
        }
      };
      items.push(item);
    });

    this.setState({
      items
    }, () => this.animate());
  };

  animate = () => {
    const { explosionSpeed = 350, fallSpeed = 3000 } = this.props;

    Animated.sequence([
      Animated.timing(this.animation, {toValue: 0, duration: 0}),
      Animated.timing(this.animation, {
        toValue: 1,
        duration: explosionSpeed,
        easing: Easing.out(Easing.quad)
      }),
      Animated.timing(this.animation, {
        toValue: 2,
        duration: fallSpeed,
        easing: Easing.quad
      }),
    ]).start();
  };

  render() {
    const { origin, colors = DEFAULT_COLORS, fadeOut } = this.props;
    const { height, width } = Dimensions.get('window');

    return (
      <React.Fragment>
        {this.state && this.state.items && this.state.items.map((item: Item, index: number) => {
          const left = this.animation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [origin.x, item.leftDelta * width, item.leftDelta * width]
          });
          const bottom = this.animation.interpolate({
            inputRange: [0, 1, 1 + item.topDelta, 2],
            outputRange: [origin.y, item.topDelta * height, 0, 0]
          });
          const rotateX = this.animation.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', `${item.speedDelta.rotateX * 360 * 10}deg`]
          });
          const rotateY = this.animation.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', `${item.speedDelta.rotateY * 360 * 5}deg`]
          });
          const rotateZ = this.animation.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', `${item.speedDelta.rotateZ * 360 * 2}deg`]
          });
          const translateX = this.animation.interpolate({
            inputRange: [0, 0.4, 1.2, 2],
            outputRange: [0, -(item.swingDelta * 30), (item.swingDelta * 30), 0]
          });
          const opacity = this.animation.interpolate({
            inputRange: [0, 1, 1.8, 2],
            outputRange: [1, 1, 1, fadeOut ? 0 : 1]
          });
          const transform = [{rotateX}, {rotateY}, {rotateZ}, {translateX}];

          return (
            <Confetti color={colors[Math.round(randomValue(0, colors.length - 1))]} left={left} bottom={bottom} transform={transform} opacity={opacity} key={index} />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Explosion;
