// @flow

export const randomValue = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const randomColor = (colors: Array<string>): string => {
  return colors[Math.round(randomValue(0, colors.length - 1))]
};
