module.exports = {
  rootDir: '../../',
  roots: ['src/client'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./src/client/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'src/client/tsconfig.spec.json',
    },
    __TRANSFORM_HTML__: true,
  },
  coverageDirectory: './reports/coverage/client',
  collectCoverageFrom: ['src/client/**/*.{ts,js,jsx}'],
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: ['<rootDir>/src/client/typings.d.ts'],
}
