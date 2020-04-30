// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import ConfettiCannon, {DEFAULT_EXPLOSION_SPEED, DEFAULT_FALL_SPEED} from '..';

describe('index', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should trigger animations callbacks', () => {
    const handleAnimationStart = jest.fn();
    const handleAnimationEnd = jest.fn();
    const count = 10;

    renderer.create(
      <ConfettiCannon
        count={count}
        origin={{x: -10, y: 0}}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      />
    );

    expect(handleAnimationStart).toHaveBeenCalledTimes(1);
    expect(handleAnimationStart.mock.calls[0][0].length).toEqual(count);
    expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(DEFAULT_EXPLOSION_SPEED + DEFAULT_FALL_SPEED);

    expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    expect(handleAnimationEnd.mock.calls[0][0].length).toEqual(count);
  });

  it('should be able to customize speeds', () => {
    const handleAnimationStart = jest.fn();
    const handleAnimationEnd = jest.fn();
    const count = 10;
    const explosionSpeed = 35;
    const fallSpeed = 300;

    renderer.create(
      <ConfettiCannon
        count={count}
        origin={{x: -10, y: 0}}
        explosionSpeed={explosionSpeed}
        fallSpeed={fallSpeed}
        fadeOut={true}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      />
    );

    expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(explosionSpeed + fallSpeed);

    expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
  });
});
