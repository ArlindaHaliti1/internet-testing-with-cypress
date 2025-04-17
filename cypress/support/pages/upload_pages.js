class FileUploadPage {
    elements = {
      visit: ()=> cy.visit('/upload'),
      fileInput: () => cy.get('#file-upload'),
      submitButton: () => cy.get('#file-submit'),
      successMessage: () => cy.get('h3'),
      failureMessage: () => cy.get('h1'),
      uploadedFileName: () => cy.get('#uploaded-files')
    };
  
    visit() {
        this.elements.visit() 
      }
    uploadFile(fileName) {
          this.elements.fileInput().attachFile(fileName);
      }
  
   
    submit() {
      this.elements.submitButton().click();
    }
  
    
    getSuccessMessage() {
      return this.elements.successMessage();
    }
    getFailureMessage() {
        return this.elements.failureMessage();
      }
  
   
    getUploadedFileName() {
      return this.elements.uploadedFileName();
    }
  
   
    assertUploadSuccess(expectedFileName) {
      this.getSuccessMessage().should('contain.text', 'File Uploaded!');
      this.getUploadedFileName().should('contain.text', expectedFileName);
    }
    assertUploadFailure() {
      this.getFailureMessage().should('contain.text', 'Internal Server Error'); 
      }
  }
  
  export default FileUploadPage;
  