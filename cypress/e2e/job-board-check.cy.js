describe('job board', () => {
  const keyphrases = ['Software Engineer', 'Salesforce Admin', 'Dog Walker'];

  beforeEach(() => {
    cy.visit('https://www.sis.us/jobs/requisitions');
  })

  keyphrases.forEach((keyphrase, index) => {
    it(`Keyphrase search ${index + 1}: ${keyphrase}`, () => {
      cy.contains(keyphrase, { timeout: 10000 }).should('exist').then(() => {
        cy.log(`${keyphrase} element found on site`);
        cy.exec(`node send-email.js \"${keyphrase}\"`, { timeout: 60000 })
          .its('code')
          .should('eq', 0);
      });
    });
  });   
})
  //set to run daily