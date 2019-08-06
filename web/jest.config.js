module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.web.spec.json'
    },
  },
  moduleNameMapper: {
    '@memmy/model': '<rootDir>/model/src/index.ts'
  }
};