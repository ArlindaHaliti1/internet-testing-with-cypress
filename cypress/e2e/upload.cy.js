import FileUploadPage from '../support/pages/upload_pages';
const fileUpload = new FileUploadPage();
import 'cypress-file-upload';
beforeEach(() => {
     fileUpload.visit();
 
})

describe('File Upload', () => {
  it('uploads a valid file', () => {
 
    fileUpload.uploadFile('cypress.txt');
    fileUpload.submit();
    fileUpload.assertUploadSuccess('cypress.txt');
  });


  it('should not allow file upload when no file is selected', () => {
    fileUpload.submit();
    fileUpload.assertUploadFailure('');
  });
});