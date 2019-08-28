exports.config = {
  output: './output',
  timeout:'10',
  helpers: {
    "Mochawesome": {
    "uniqueScreenshotNames": "true"
  },
    WebDriver: {
      url: 'https://automacaocombatista.herokuapp.com/',
      browser: 'chrome',
      
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/Home.js',
    radioECheckBoxPage: './pages/RadioECheckBox.js'
  },
  mocha: {
    "reporterOptions": {
    "reportDir": "output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      "enabled": true
    }
  },
  tests: './*_test.js',
  name: 'testBLZ'
}