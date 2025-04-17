class HoverPage {
    elements = {
      visit: () => cy.visit('/hovers'),
      imageCaptions: () => cy.get('.figcaption')
    };
  
    visit() {
      this.elements.visit();
    }
  
    getImageCaptions() {
      return this.elements.imageCaptions();
    }
  
    hoverAndCheckText(index, expectedText) {
      this.getImageCaptions()
        .eq(index)
        .invoke('show') 
        .contains(expectedText)
        .first()
        .should('be.visible');
    }
  }
  
  export default new HoverPage();
  