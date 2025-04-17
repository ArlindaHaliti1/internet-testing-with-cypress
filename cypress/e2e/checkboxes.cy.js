import CheckboxesPage from '../support/pages/checkboxes_pages';

describe('Checkboxes test', () => {
  beforeEach(() => {
    CheckboxesPage.visit();
  });

  it('Checks checkbox 1 and asserts it is checked', () => {
    CheckboxesPage.checkFirstCheckbox();
    CheckboxesPage.assertFirstCheckboxChecked();
  });

  it('Unchecks checkbox 2 and asserts it is not checked', () => {
    CheckboxesPage.uncheckLastCheckbox();
    CheckboxesPage.assertLastCheckboxNotChecked();
  });
});
