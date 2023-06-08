cy.get('#submit').should('have.attr', 'value', 'Submit');
cy.get('#submit').should('have.attr', 'id', 'submit');
cy.get('#submit').should('have.attr', 'type', 'submit');
