// @flow

import * as React from 'react';
import { StyleSheet, Animated } from 'react-native';

import { randomValue } from '../utils';

type Interpolations = Array<{
  translateX?: Animated.Interpolation,
  translateY?: Animated.Interpolation,
  rotate?: Animated.Interpolation,
  rotateX?: Animated.Interpolation,
  rotateY?: Animated.Interpolation,
  perspective?: number
}>;

type Props = {|
  containerTransform: Interpolations,
  transform: Interpolations,
  color: string,
  opacity: Animated.Interpolation,
  testID?: string
|};

class Confetti extends React.PureComponent<Props> {
  props: Props;
  width: number = randomValue(8, 16);
  height: number = randomValue(6, 12);
  isRounded: boolean = Math.round(randomValue(0, 1)) === 1;

  render() {
    const { containerTransform, transform, opacity, color } = this.props;
    const { width, height, isRounded } = this;
    const containerStyle = { transform: containerTransform };
    const style = { width, height, backgroundColor: color, transform, opacity};

    return (
      <Animated.View
        pointerEvents="none"
        renderToHardwareTextureAndroid={true}
        style={[styles.confetti, containerStyle]}>
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
