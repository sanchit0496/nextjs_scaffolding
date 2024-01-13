module.exports = {
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jest-environment-jsdom',
};
  