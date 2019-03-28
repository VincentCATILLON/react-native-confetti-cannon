// @flow strict

import * as React from 'react';
import { StyleSheet, Animated } from 'react-native';

import {randomValue} from '../utils';

type Props = {|
  left: Animated.Interpolation,
  bottom: Animated.Interpolation,
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
    const { left, bottom, transform, opacity } = this.props;
    const { width, height, isRounded, backgroundColor } = this;
    const style = { left, bottom, width, height, backgroundColor, transform, opacity};

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
