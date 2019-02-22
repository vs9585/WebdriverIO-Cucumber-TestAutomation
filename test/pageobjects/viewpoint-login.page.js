import Page from './page'

class viewpointLoginPage extends Page {

  /**
  * define elements
  */
  get username() { return browser.element('//*[@name="username"]'); }
  get password() { return browser.element('//*[@name="password"]'); }
  get loginButton() { return browser.element('//button[contains(., "Log In")]'); }
  get errorMessage() { return browser.element('//span[contains(., "Wrong username or password.")]'); }
  get pageTitle() { return browser.element('//title[contains(., "Sign In with Auth0")]'); }
  
  open(url) {
    super.open(url)      
    browser.pause(10000);
  }

  login (username, password) {
    this.username.setValue(username);   //this will set username to the username field in the form
    this.password.setValue(password);   //this will set password to the password field in the form 
  }

  submitLogin () {
    this.loginButton.click();         //this performs click action on login button
  }

  checkFailedLogin () {
    this.errorMessage.waitForVisible(3000);
    return this.errorMessage.isVisible();     //this verifies if the error message is present on screen
  }
}

export default new viewpointLoginPage()
