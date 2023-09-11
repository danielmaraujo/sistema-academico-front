module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(vue-router|@babel|vuetify|axios)/)",],
  "moduleNameMapper": {
    "/^components\/(.*)$/": "<rootDir>/src/components/$1",
    "/^services\/(.*)$/": "<rootDir>/src/services/$1",
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1',
  },    
  setupFilesAfterEnv: ['<rootDir>/src/plugins/vuetify.js'],
}