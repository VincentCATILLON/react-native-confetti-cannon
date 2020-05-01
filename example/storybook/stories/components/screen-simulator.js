import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  }
});

const ScreenSimulator = (story) => (
  <View style={styles.container}>
    {story()}
  </View>
);

export default ScreenSimulator;
