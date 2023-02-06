const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4b7344",
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});