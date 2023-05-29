() => {
  cy.get('#submit') // Assuming the submit button has the ID "submit"
    .should('have.attr', 'value', 'Submit')
    .should('have.attr', 'type', 'submit');
}
