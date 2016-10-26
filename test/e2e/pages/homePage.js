var commands = {
  goDashboard: function () {
    return this
      .click('@dashboardLink')
      .waitForElementNotPresent('@dashboardLink')
  }
}

module.exports = {
  url: function () {
    return this.api.globals.devServerURL
  },
  commands: [ commands ],
  elements: {
    dashboardLink: {
      selector: '#app > a'
    },
    image: {
      selector: '#app > img'
    }
  }
}
