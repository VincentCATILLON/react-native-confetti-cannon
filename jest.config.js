// @flow

module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(.*-)?react(.*-)?(native)(-.*)?)',
    'node_modules/core-js'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!**/__tests__/**'
  ],
  coverageThreshold: {
    'global': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  verbose: true
};
