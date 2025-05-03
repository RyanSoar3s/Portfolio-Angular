import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  preset: 'jest-preset-angular',
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  setupFilesAfterEnv: [ '<rootDir>/setup-jest.ts' ],

  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/app/components/$1",
    "@services/(.*)": "<rootDir>/src/app/services/$1",
    "@data/types/(.*)": "<rootDir>/src/app/types/$1"

  },

  testEnvironment: "jsdom",
  verbose: true,

};

export default config;
