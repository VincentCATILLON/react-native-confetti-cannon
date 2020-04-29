// @flow strict

import * as React from 'react';
import { StyleSheet, Animated } from 'react-native';

import { randomValue } from '../utils';

type Props = {|
  containerTransform: Array<{ [key: string]: Animated.Interpolation }>,
  transform: Array<{ [key: string]: Animated.Interpolation }>,
  color: string,
  opacity: Animated.Interpolation,
|};

class Confetti extends React.PureComponent<Props> {
  props: Props;
  width: number = randomValue(8, 16);
  height: number = randomValue(6, 12);
  isRounded: boolean = Math.round(randomValue(0, 1)) === 1;
  backgroundColor: string = this.props.color;

  render() {
    const { containerTransform, transform, opacity } = this.props;
    const { width, height, isRounded, backgroundColor } = this;
    const containerStyle = { transform: containerTransform };
    const style = { width, height, backgroundColor, transform, opacity};

    return (
      <Animated.View style={[styles.confetti, containerStyle]}>
        <Animated.View style={[isRounded && styles.rounded, style]} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  confetti: {
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  rounded: {
    borderRadius: 100
  }
});

export default Confetti;
