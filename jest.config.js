module.exports = {
  testRegex: '.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '^apotte-assets/(.*)$': '<rootDir>/assets/$1',
    '^apotte/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
}
