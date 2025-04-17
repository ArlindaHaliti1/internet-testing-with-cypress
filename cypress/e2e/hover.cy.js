import HoverPage from '../support/pages/hover_pages';


describe('Hovers tests', () => {
  const expectedNames = ['user1', 'user2', 'user3'];

  beforeEach(() => {
    HoverPage.visit()
  });

  it('hovers over each image and checks that text is visible', () => {
    expectedNames.forEach((name, index) => {
      HoverPage.hoverAndCheckText(index, name);
    });
  });

  it('should have exactly 3 image captions', () => {
    HoverPage.getImageCaptions().should('have.length', expectedNames.length);
  });
  it('should have all captions hidden initially', () => {
    HoverPage.getImageCaptions().each(($caption) => {
      cy.wrap($caption).should('not.be.visible');
    });});
it('should correctly display caption when hovering over the second image only', () => {
        HoverPage.hoverAndCheckText(1, expectedNames[1]);
      });
});
