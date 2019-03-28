<p align="center">
  <img height="400" src="https://github.com/VincentCATILLON/react-native-confetti-cannon/raw/master/.github/demo.gif" alt="React-native-confetti-cannon">
</p>

[![CircleCI](https://circleci.com/gh/VincentCATILLON/react-native-confetti-cannon.svg?style=svg)](https://circleci.com/gh/VincentCATILLON/react-native-confetti-cannon)

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

| Name           | Type                   | Description                                | Required | Default        |
|----------------|------------------------|--------------------------------------------|----------|----------------|
| count          | number                 | items count to display                     | required |                |
| origin         | {x: number, y: number} | animation position origin                  | required |                |
| explosionSpeed | number                 | explosion duration (ms) from origin to top |          | 350            |
| fallSpeed      | number                 | fall duration (ms) from top to bottom      |          | 3000           |
| fadeOut        | boolean                | make the confettis disappear at the end    |          | false          |
| colors   | Array<string>          | give your own colors to the confettis      |          | default colors |
