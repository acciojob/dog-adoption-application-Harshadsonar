describe('Dog Adoption Application', () => {
  it('should fill out the dog adoption application form', () => {
    cy.visit('your_page_url'); // Replace 'your_page_url' with the actual URL of your page

    // Fill out the form fields
    cy.get('#name').type('Ritesh');
    cy.get('#phone').type('1234567890');
    cy.get('#address').type('123 Main Street');
    cy.get('#checkbox').check();
    cy.get('#multiSelect').select(['Bulldog', 'German Shepherd']);

    // Submit the form
    cy.get('#submit').click();

    // Add assertions to verify the form submission
    cy.url().should('include', 'success.html'); // Replace 'success.html' with the actual URL of the success page
    cy.contains('Thank you for submitting your dog adoption application!'); // Replace with appropriate success message or element on the success page
  });
});
