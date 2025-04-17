class WindowsPage {
    elements = {
    visit: ()=> cy.visit('/windows'),
      link: () => cy.get('a').eq(1),
      header: () => cy.get('h3'),
    };
    visit() {
        this.elements.visit() 
      }
  
    clickLinkAndAssertUrl() {
      this.elements.link().should($a => {
        expect($a.attr('href'), 'href').to.equal('/windows/new');
        expect($a.attr('target'), 'target').to.equal('_blank');
        
       
        $a.attr('target', '_self');
      }).click();
    }
  
    assertNewWindow() {
      cy.url().should('include', 'windows/new'); 
      this.elements.header().should('have.text', 'New Window');
    }
    assertLinkDoesNotOpenNewWindow() {
        this.elements.link().should($a => {
          expect($a.attr('target'), 'target').not.to.equal('_self'); 
        }).click();
    

        cy.url().should('not.include', 'windows/new');
      }
    
      assertIncorrectHeader() {
        cy.url().should('not.include', 'windows/new');
        this.elements.header().should('not.have.text', 'New Window'); 
      }
  }
  
  export default WindowsPage;