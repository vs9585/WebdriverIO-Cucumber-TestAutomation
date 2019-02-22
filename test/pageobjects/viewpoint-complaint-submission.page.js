import Page from './page'

class viewpointComplaintSubmissionPage extends Page {

  /**
  * define elements
  */
  get fname() { return browser.element('//*[@id="form_name"]'); }
  get lname() { return browser.element('//*[@id="form_surname"]'); }
  get address() { return browser.element('//*[@id="form_address1"]'); }
  get city() { return browser.element('//*[@id="form_city"]'); }
  get address2() { return browser.element('//*[@id="form_address2"]'); }
  get postcode() { return browser.element('//*[@id="form_zipcode"]'); }
  get state() { return browser.element('//option[@value="Texas"]'); }
  get contacts() { return browser.element('//*[@id="form_homephone"]'); }
  get details() { return browser.element('//*[@id="form_comments"]'); }
  get likeToContact() { return browser.element('//option[@value="Y"]'); }
  get submitButton() { return browser.element('//button[contains(., "Submit complaint")]'); }
  get datePicker() { return browser.element('//*[@id="form_date"]'); }
  get date() { return browser.element('//a[contains(., "19")]'); }

  get successMessage() { return browser.element('//div/h1[contains(., "We Have Received Your Complaint")]'); }

  open(url) {
    super.open(url)
  }

  submit(fname, lname, address, city, address2, postcode, contacts, details, likeToContact, sendReceipt) {
    this.fname.setValue(fname);
    this.lname.setValue(lname);
    this.address.setValue(address);
    this.city.setValue(city);
    this.address2.setValue(address2);
    this.postcode.setValue(postcode);
    this.state.click();
    this.contacts.setValue(contacts);
    this.likeToContact.click();
    this.details.setValue(details);
    browser.pause(1000);
    this.datePicker.click();
    browser.pause(1000);
    this.date.click();
  }

  submitComplaint() {
    browser.pause(1000);
    this.submitButton.click();    //it performs click action on submit button
  }

  checkComplaintSubmission () {
    this.successMessage.waitForVisible(3000);
    return this.successMessage.isVisible();     //it verifies the message displayed when the complaint is successfully submitted
  }
}

export default new viewpointComplaintSubmissionPage()
