describe('Smoke Test - Sauce Demo Shopify', () => {
  it('Open homepage and verify store name', () => {
    cy.visit('/')
    cy.contains('Sauce Demo')
  })
})
