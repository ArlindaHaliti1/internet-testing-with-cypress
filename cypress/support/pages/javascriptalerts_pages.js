class JavascriptAlertsPage {
    elements = {
    visit: ()=> cy.visit('/javascript_alerts'),
      jsAlertButton: () => cy.get('button[onclick="jsAlert()"]'),
      jsConfirmButton: () => cy.get('button[onclick="jsConfirm()"]'),
      jsPromptButton: () => cy.get('button[onclick="jsPrompt()"]'),
      resultText: () => cy.get('#result')
    };
    visit() {
        this.elements.visit() 
      }
    clickJsAlertAndAssert() {
      this.elements.jsAlertButton().click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS Alert');
      });
      cy.on('window:confirm', () => true);
      this.elements.resultText().should('have.text', 'You successfully clicked an alert');
    }
  
    clickJsConfirmAndAssert() {
      this.elements.jsConfirmButton().click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS Confirm');
      });
      cy.on('window:confirm', () => true);
      this.elements.resultText().should('have.text', 'You clicked: Ok');
    }
  
    clickJsPromptAndAssert() {
      const textInput = 'Hello World';
  
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(textInput);
      });
  
      this.elements.jsPromptButton().click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('I am a JS prompt');
      });
      cy.on('window:confirm', () => true);
      this.elements.resultText().should('contain.text', textInput);
    }
  }
  
  export default JavascriptAlertsPage;
  