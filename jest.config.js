module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.js"
  ]
};