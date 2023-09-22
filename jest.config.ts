import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig: Config = {
  rootDir: './',
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/animations/(.*)$': '<rootDir>/public/animations/$1',
    '^@/constants/(.*)$': '<rootDir>/constants/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '@/images/(.*)$': '<rootDir>/public/images/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/sections/(.*)$': '<rootDir>/pages/$1',
  },
  coveragePathIgnorePatterns: ['constants'],
  moduleDirectories: ['node_modules', '<rootDir>/../'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
