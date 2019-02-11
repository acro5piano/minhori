module.exports = {
  testRegex: '.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@frontend/(.*)$': '<rootDir>/frontend/$1',
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@root/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  setupFiles: ['./setupJest.js'],
}
