const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     specPattern: 'cypress/e2e/**/*.js'
     return config;
    },
    baseUrl: "https://the-internet.herokuapp.com/",
  }

});
