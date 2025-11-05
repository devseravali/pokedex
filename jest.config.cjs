module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', 
  },
   moduleNameMapper: {
     '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
     '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
     '\\.(ttf|woff|woff2|eot|otf)$': '<rootDir>/__mocks__/fileMock.js',
   },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], 
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
};
