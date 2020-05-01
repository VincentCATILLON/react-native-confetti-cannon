<p align="center">
  <img height="400" src="https://github.com/VincentCATILLON/react-native-confetti-cannon/raw/master/.github/demo.gif" alt="React-native-confetti-cannon">
</p>

[![CircleCI](https://circleci.com/gh/VincentCATILLON/react-native-confetti-cannon.svg?style=svg)](https://circleci.com/gh/VincentCATILLON/react-native-confetti-cannon)
![https://img.shields.io/npm/v/react-native-confetti-cannon/latest?color=%23292C33&label=%20&logo=npm](https://img.shields.io/npm/v/react-native-confetti-cannon/latest?color=%23292C33&label=%20&logo=npm)
![https://img.shields.io/badge/Platforms-iOS%20%7C%C2%A0Android%20%7C%20Web-blue](https://img.shields.io/badge/Platforms-iOS%20%7C%C2%A0Android%20%7C%20Web-blue)
![https://img.shields.io/github/stars/vincentcatillon/react-native-confetti-cannon?style=social](https://img.shields.io/github/stars/vincentcatillon/react-native-confetti-cannon?style=social)

## Live demo

:rocket: Try yourself on Storybook <a href="https://vincentcatillon.github.io/react-native-confetti-cannon">web version</a>

## Installation

```console
npm install react-native-confetti-cannon
# or
yarn add react-native-confetti-cannon
```

## Usage

```js
import ConfettiCannon from 'react-native-confetti-cannon';

const MyComponent = () => (
  <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
);
```

## Props

| Name             | Type                   | Description                                | Required | Default        |
|------------------|------------------------|--------------------------------------------|----------|----------------|
| count            | number                 | items count to display                     | required |                |
| origin           | {x: number, y: number} | animation position origin                  | required |                |
| explosionSpeed   | number                 | explosion duration (ms) from origin to top |          | 350            |
| fallSpeed        | number                 | fall duration (ms) from top to bottom      |          | 3000           |
| fadeOut          | boolean                | make the confettis disappear at the end    |          | false          |
| colors           | string[]               | give your own colors to the confettis      |          | default colors |
| autoStart        | boolean                | give your own colors to the confettis      |          | true           |

## Events

| Name              | Returns               | Description                                | Required |
|-------------------|-----------------------|--------------------------------------------|----------|
| onAnimationStart  | void                  | callback triggered at animation start      |          |
| onAnimationResume | void                  | callback triggered at animation resume     |          |
| onAnimationStop   | void                  | callback triggered at animation stop       |          |
| onAnimationEnd    | void                  | callback triggered at animation end        |          |

## Methods

| Name             | Returns                | Description                                | Required |
|------------------|------------------------|--------------------------------------------|----------|
| start            | void                   | start the animation programmatically       |          |
| resume           | void                   | resume the animation programmatically      |          |
| stop             | void                   | stop the animation programmatically        |          |

## Development

Deep into the `example` folder and run:

```console
npm install && npm start
```

And choose one of the following Expo commands:
- `i`: open in iOS simulator
- `a`: open in Android emulator
- `w`: open in web browser

## :warning: Warning

It is strongly recommended to use 1.2.0 or higher to avoid this warning introduced in [React-Native 0.62](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#deprecated):

> Animated: useNativeDriver was not specified. This is a required option and must be explicitly set to true or false
