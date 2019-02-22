### Info

  This repository contains WEbdriverIO/Cucumber based sample test cases. The test cases execute the below mentioned scenarios :

  Site Functionality Test: 1

    This automated test will:

    1. Navigate to the site https://viewpoint-staging.bksv.com/sat3

    2. Fill in all the fields of the form.

    3. Hit Submit complaint button

    4. Wait for the response after successful submission


  Site Functionality Test: 2

    This test will:

    1. Navigate to the site https://viewpoint-admin-staging.emsbk.com/dca4

    2. Wait for the redirection to login domain https://bkems.auth0.com/login

    3. Fill the in the login with sample values.

    4. Validate the failure of login due to wrong credentials.

### Installation

Hit the below command to install all the dependencies
  
  `npm install`

### Run Tests

To execute the entire test suite in local development, you can use the command mentioned below

  `npm run test`

