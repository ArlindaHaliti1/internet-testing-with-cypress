import WindowsPage from '../support/pages/newwindow_pages';
const windowsPage = new WindowsPage();

describe('Javascript Alerts tests', () => {
  beforeEach(() => {
    windowsPage.visit()
  });

  it('Clicks in a new window and asserts the URL', () => {
    windowsPage.clickLinkAndAssertUrl(); 
    windowsPage.assertNewWindow();   

  });
  it('should not open a new window with target _self', () => {
    windowsPage.assertLinkDoesNotOpenNewWindow();
  });


  it('should not have header text "New Window"', () => {
    windowsPage.assertIncorrectHeader();
});

});