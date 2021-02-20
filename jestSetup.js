// @flow

jest.mock('react-native', () => {
  const ReactNative = jest.requireActual('react-native');
  const { Platform } = ReactNative;

  jest.spyOn(Platform, 'select');
  const MockPlatform = {
    ...Platform,
    OS: 'ios',
  };
  Platform.select.mockImplementation(specifics => {
    const { OS } = MockPlatform
    if (OS in specifics) {
      return specifics[OS]
    } else if ('default' in specifics) {
      return specifics.default
    }
    return undefined
  })

  return Object.setPrototypeOf({
    Platform: MockPlatform
  }, ReactNative);
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
