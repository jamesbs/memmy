const { pathsToModuleNameMapper } = require('ts-jest/utils');
module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.gateway.json'
    },
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@memmy/model': '<rootDir>/../../model/src/index.ts'
  }
}