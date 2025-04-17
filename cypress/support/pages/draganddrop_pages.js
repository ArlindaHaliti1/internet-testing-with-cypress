class DragAndDropPage {
    elements = {
      visit: () => cy.visit('/drag_and_drop'),
      columnA: () => cy.get('#column-a'),
      columnB: () => cy.get('#column-b')
    };
  
    visit() {
      this.elements.visit();
    }
  
    getColumnA() {
      return this.elements.columnA();
    }
  
    getColumnB() {
      return this.elements.columnB();
    }
  
    dragAtoB() {
      const dataTransfer = new DataTransfer();
      this.getColumnA().trigger('dragstart', { dataTransfer });
      this.getColumnB().trigger('drop', { dataTransfer });
    }
  
    dragBtoA() {
      const dataTransfer = new DataTransfer();
      this.getColumnB().trigger('dragstart', { dataTransfer });
      this.getColumnA().trigger('drop', { dataTransfer });
    }
  
    assertColumnTexts(expectedTextA, expectedTextB) {
      this.getColumnA().should('have.text', expectedTextA);
      this.getColumnB().should('have.text', expectedTextB);
    }
  }
  
  export default new DragAndDropPage();
  