/*
 * For a detailed explanation regarding each configuration property and type
 * check, visit: https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/'
    ],
    coverageProvider: 'v8',
    errorOnDeprecated: true,
    moduleFileExtensions: [
      'js',
      'json',
      'jsx',
      'ts',
      'tsx'
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testEnvironmentOptions: {},
    testMatch: [
      './test/**/*.[jt]s?(x)',
      '**/?(*.)+(test|spec).[tj]s?(x)'
    ],
    verbose: true
};
