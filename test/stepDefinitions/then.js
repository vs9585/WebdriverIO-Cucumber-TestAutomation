
import { defineSupportCode } from 'cucumber';
import viewpointComplaintSubmissionPage from '../pageobjects/viewpoint-complaint-submission.page';
import viewpointLoginPage from '../pageobjects/viewpoint-login.page';

defineSupportCode(({ Then }) => {

  // *** belongs to ta-loging  feature
  Then(/^I should see the confirmation of complaint submission$/, () => {
    viewpointComplaintSubmissionPage.checkComplaintSubmission().should.be.true;   //verifies complaint submission screen
  });

  Then(/^I submit the login form$/, () => {
    viewpointLoginPage.submitLogin()    //verifies submit action on the login form
  });
  
  Then(/^I should see the login failure error message$/, () => {
    viewpointLoginPage.checkFailedLogin().should.be.true;   //verifies error message on failed login
  });

});
