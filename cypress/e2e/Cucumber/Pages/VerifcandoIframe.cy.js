class VerificarIframe{
    VerificarIframe() {
      cy.get('iframe[title="Rich Text Area"]')
      .should('exist')
      
    }
}
export default VerificarIframe;