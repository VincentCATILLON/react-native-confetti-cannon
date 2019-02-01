## <img height="32" src=".github/logo.png" alt="React-native-confetti-cannon" style="margin-right: 12px;">React-native-confetti-cannon

<p align="center">
  <img height="400" src=".github/demo.gif" alt="React-native-confetti-cannon">
</p>

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

| Name           | Type                   | Description                                | Required | Default |
|----------------|------------------------|--------------------------------------------|----------|---------|
| count          | number                 | items count to display                     | required |         |
| origin         | {x: number, y: number} | animation position origin                  | required |         |
| explosionSpeed | number                 | explosion duration (ms) from origin to top |          | 350     |
| fallSpeed      | number                 | fall duration (ms) from top to bottom      |          | 3000    |
