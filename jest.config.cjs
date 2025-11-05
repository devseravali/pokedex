module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', 
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\.(ttf|woff|woff2|eot|otf|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], 
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
};
