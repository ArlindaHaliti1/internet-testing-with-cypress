class CheckboxesPage {
    elements = {
      visit: () => cy.visit('/checkboxes'),
      checkboxes: () => cy.get('#checkboxes input[type="checkbox"]')
    };
  
    visit() {
      this.elements.visit();
    }
  
    getCheckboxes() {
      return this.elements.checkboxes();
    }
  
    checkFirstCheckbox() {
      this.getCheckboxes().first().check();
    }
  
    uncheckLastCheckbox() {
      this.getCheckboxes().last().uncheck();
    }
  
    assertFirstCheckboxChecked() {
      this.getCheckboxes().first().should('be.checked');
    }
  
    assertLastCheckboxNotChecked() {
      this.getCheckboxes().last().should('not.be.checked');
    }
  }
  
  export default new CheckboxesPage();
  