import DragAndDropPage from '../support/pages/draganddrop_pages';

describe('Drag and Drop test', () => {
  beforeEach(() => {
    DragAndDropPage.visit();
  });

  it('Asserts Column A and B initial positions, drags B over A, and checks new order', () => {
    DragAndDropPage.assertColumnTexts('A', 'B');  

    DragAndDropPage.dragBtoA();                  

    DragAndDropPage.assertColumnTexts('B', 'A'); 
  });
  it('Performs multiple drag operations and verifies final state', () => {
    DragAndDropPage.dragBtoA(); 
    DragAndDropPage.assertColumnTexts('B', 'A');

    DragAndDropPage.dragAtoB(); 
    DragAndDropPage.assertColumnTexts('A', 'B');
  });
  it('Ensures column elements are visible and exist', () => {
    DragAndDropPage.getColumnA().should('exist').and('be.visible');
    DragAndDropPage.getColumnB().should('exist').and('be.visible');
  });
});