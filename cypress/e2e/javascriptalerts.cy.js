import JavascriptAlertsPage from '../support/pages/javascriptalerts_pages'; 

const javascriptAlertsPage = new JavascriptAlertsPage();

describe('Javascript Alerts tests', () => {
  beforeEach(() => {
    javascriptAlertsPage.visit()  
  });

  it('Clicks on the JS Alert button and asserts the alert text', () => {
    javascriptAlertsPage.clickJsAlertAndAssert();
  });

  it('Clicks on the JS Confirm button and asserts the alert text', () => {
    javascriptAlertsPage.clickJsConfirmAndAssert();
  });

  it('Clicks on the JS Prompt button and asserts the alert text', () => {
    javascriptAlertsPage.clickJsPromptAndAssert();
  });
});