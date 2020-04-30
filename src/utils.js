// @flow

export const randomValue = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
