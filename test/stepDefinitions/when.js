
import { defineSupportCode } from 'cucumber';
import viewpointComplaintSubmissionPage from '../pageobjects/viewpoint-complaint-submission.page';
import viewpointLoginPage from '../pageobjects/viewpoint-login.page';

defineSupportCode(({ When }) => {

  // *** belongs to ta-loging  feature
  When(/^I fill in the complaint details form with all the values "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) => {
    viewpointComplaintSubmissionPage.submit(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);    // entering user details in the form and submiting the page
  });

  // *** belongs to ta-loging  feature
  When(/^I submit the complaint$/, () => {
    viewpointComplaintSubmissionPage.submitComplaint(); //performs submit action
  });

  When(/^I fill in the login details form with "([^"]*)" "([^"]*)"$/, (arg1, arg2) => {
    viewpointLoginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });
  

});
