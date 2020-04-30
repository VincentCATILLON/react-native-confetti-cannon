import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

class App extends React.PureComponent {
  confettiCannon;

  handleAnimationStart = () => console.log('Animation start');

  handleAnimationResume = () => console.log('Animation resume');

  handleAnimationStop = () => console.log('Animation stop');

  handleAnimationEnd = () => console.log('Animation end');

  handleStartPress = () => this.confettiCannon.start();

  handleResumePress = () => this.confettiCannon.resume();

  handleStopPress = () => this.confettiCannon.stop();

  render() {
    return (
      <View style={styles.container}>
        <ConfettiCannon
          count={200}
          origin={{x: -10, y: 0}}
          onAnimationStart={this.handleAnimationStart}
          onAnimationResume={this.handleAnimationResume}
          onAnimationStop={this.handleAnimationStop}
          onAnimationEnd={this.handleAnimationEnd}
          ref={ref => this.confettiCannon = ref}
        />
        <Button title="Start" onPress={this.handleStartPress} />
        <Button title="Resume" onPress={this.handleResumePress} />
        <Button title="Stop" onPress={this.handleStopPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
