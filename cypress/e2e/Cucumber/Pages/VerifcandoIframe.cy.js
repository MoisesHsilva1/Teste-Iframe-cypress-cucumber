class VerificarIframe{
    VerificarIframe() {
      cy.get('iframe[title="Rich Text Area"]')
      .should('exist')
      cy.console.log();
    }
}
export default VerificarIframe;