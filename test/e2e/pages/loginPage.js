var commands = {
  login: function (username, password) {
    return this
      .setValue('@usernameInput', username)
      .setValue('@passwordInput', password)
      .waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton', 2000)
  }
}

module.exports = {
  url: function () {
    return this.api.globals.devServerURL + '/auth/v1/auth0/connect'
  },
  commands: [ commands ],
  elements: {
    container: {
      selector: 'body .a0-lock-container'
    },
    usernameInput: {
      selector: '#a0-signin_easy_email'
    },
    passwordInput: {
      selector: '#a0-signin_easy_password'
    },
    submitButton: {
      selector: '.a0-mode-container form .bottom-content button'
    }
  }
}
