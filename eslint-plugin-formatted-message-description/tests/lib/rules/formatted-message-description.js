const rule = require("../../../lib/rules/formatted-message-description");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ERROR_DESCRIPTION_MISSING = 'FormattedMessage component should have a `description` prop';

const ruleTester = new RuleTester();

ruleTester.run("formatted-message-description", rule, {
    valid: [
      {
          code: '<FormattedMessage description="some description" />',
      }
    ],
    invalid: [
        {
            code: '<FormattedMessage />',
            errors: [{
                message: ERROR_DESCRIPTION_MISSING,
                type: 'JSXOpeningElement'
            }]
        }
    ]
});