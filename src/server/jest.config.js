module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../../',
  roots: ['src/server'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['src/server/**/*.{ts,js,jsx}'],
  coverageDirectory: './reports/coverage/server',
  testResultsProcessor: 'jest-sonar-reporter',
}
