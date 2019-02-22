const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

    specs: [
        './test/features/*.feature',
    ],
    capabilities: [
          {
              browserName: 'chrome',
              maxInstances: '5',
          },
    ],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './test/reports/errorShots/',
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 90000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
        backtrace: true,
        compiler: ['js:babel-core/register'],
        failAmbiguousDefinitions: true,
        dryRun: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        format: ['pretty'],
        colors: true, 
        snippets: false,
        source: false,
        profile: [],
        strict: true,
        tagExpression: 'not @Pending',
        timeout: defaultTimeoutInterval,
        tagsInTitle: false,    
        snippetSyntax: undefined,
    },

    before: function() {
      /**
       * Setup the Chai assertion framework
       */
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
};
