const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, // Disable Chrome web security to handle certificate errors
    retries: {
      runMode: 2, // Retry failed tests twice when running via `cypress run`
      openMode: 1, // Retry failed tests once when running via `cypress open`
    },
  },
  env: {
    CYPRESS_ENV: 'preview',
    preview_url: 'https://preview.savagex.com',
    production_url: 'https://www.savagex.com',
    dynamic_url: 'https://preview.savagex.com.shopping-bag-revamp-e2e.qa.aws.techstyle.tech/'
  }
});