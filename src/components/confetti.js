// @flow strict

import * as React from 'react';
import { StyleSheet, Animated } from 'react-native';

import {randomValue} from '../utils';

type Props = {|
  left: Animated.Interpolation,
  bottom: Animated.Interpolation,
  transform: Array<{ [key: string]: Animated.Interpolation }>
|};

const colors: Array<string> = [
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

class Confetti extends React.PureComponent<Props> {
  props: Props;
  width: number = randomValue(8, 16);
  height: number = randomValue(6, 12);
  isRounded: boolean = Math.round(randomValue(0, 1)) === 1;
  backgroundColor: string = colors[Math.round(randomValue(0, colors.length - 1))];

  render() {
    const { left, bottom, transform } = this.props;
    const { width, height, isRounded, backgroundColor } = this;
    const style = { left, bottom, width, height, backgroundColor, transform };

    return (
      <Animated.View style={[styles.confetti, isRounded && styles.rounded, style]} />
    );
  }
}

const styles = StyleSheet.create({
  confetti: {
    position: 'absolute'
  },
  rounded: {
    borderRadius: 100
  }
});

export default Confetti;
