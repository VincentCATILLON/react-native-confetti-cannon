import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  handleAnimationStart = () => console.log('Animation start');

  handleAnimationEnd = () => console.log('Animation end');

  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={200}
        origin={{x: -10, y: 0}}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
