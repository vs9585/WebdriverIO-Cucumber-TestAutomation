
import { defineSupportCode } from 'cucumber';
import viewpointComplaintSubmissionPage from '../pageobjects/viewpoint-complaint-submission.page';
import viewpointLoginPage from '../pageobjects/viewpoint-login.page';


defineSupportCode(function({ Given }) {
  
  Given(/^I am on the viewpoint page$/, function() {
    viewpointComplaintSubmissionPage.open('https://viewpoint-staging.bksv.com/sat3');   //enter the url in address bar and open the page
  });

  Given(/^I am on the viewpoint login page$/, function() {
    viewpointLoginPage.open('https://viewpoint-admin-staging.emsbk.com/dca4');    //enter the url in address bar and open the page
  });

});
