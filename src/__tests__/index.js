// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import ConfettiCannon from '..';

describe('index', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should trigger animations callbacks', () => {
    const handleAnimationStart = jest.fn();
    const handleAnimationEnd = jest.fn();
    const count = 10;
    const explosionSpeed = 100;
    const fallSpeed = 500;

    renderer.create(
      <ConfettiCannon
        count={count}
        origin={{x: -10, y: 0}}
        explosionSpeed={explosionSpeed}
        fallSpeed={fallSpeed}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}
      />
    );

    expect(handleAnimationStart).toHaveBeenCalledTimes(1);
    expect(handleAnimationStart.mock.calls[0][0].length).toEqual(count);
    expect(handleAnimationEnd).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(explosionSpeed + fallSpeed);

    expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    expect(handleAnimationEnd.mock.calls[0][0].length).toEqual(count);
  });
});
