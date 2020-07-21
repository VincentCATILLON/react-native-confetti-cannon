import * as React from 'react';

interface ExplosionProps {
  count: number;
  origin: {
    x: number;
    y: number
  };
  explosionSpeed?: number;
  fallSpeed?: number;
  colors?: string[];
  fadeOut?: boolean;
  autoStart?: boolean;
  autoStartDelay?: number;
  onAnimationStart?: () => void;
  onAnimationResume?: () => void;
  onAnimationStop?: () => void;
  onAnimationEnd?: () => void;
  testID?: string;
}

interface ConfettiItem {
  leftDelta: number;
  topDelta: number;
  swingDelta: number;
  speedDelta: {
    rotateX: number;
    rotateY: number;
    rotateZ: number;
  };
  color: string;
}

interface ExplosionState {
  items: ConfettiItem[];
}

export declare const TOP_MIN: number;
export declare const DEFAULT_COLORS: string[];
export declare const DEFAULT_EXPLOSION_SPEED: number;
export declare const DEFAULT_FALL_SPEED: number;

declare class Explosion extends React.PureComponent<ExplosionProps, ExplosionState> {}

export default Explosion;
