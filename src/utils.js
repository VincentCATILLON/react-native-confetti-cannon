// @flow strict

export const randomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
