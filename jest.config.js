export default {
  collectCoverageFrom: ['./lib/**/*.{ts,tsx}'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__ mocks __/fileMock.js',
    '^@app/(.*)$': '<rootDir>/$1',
  },
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
};
