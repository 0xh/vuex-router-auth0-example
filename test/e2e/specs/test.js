module.exports = {
  'default e2e tests': function (browser) {
    browser.page.loginPage()
      .navigate()
      .waitForElementVisible('@container', 4000)
      .login(browser.globals.myEmail, browser.globals.myPassword)
      .waitForElementVisible('#app form', 7000)

    browser.end()
  },
  'dash': '' + function (browser) {
    browser.page.homePage()
      .navigate()
      .waitForElementVisible('@image', 5000)
      .assert.elementCount('@image', 1)
      .goDashboard()
  }
}
