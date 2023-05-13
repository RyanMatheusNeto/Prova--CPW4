describe('BackButton', () => {
  beforeEach(() => {
    cy.visit('')

    cy.fixture('resposta').then((value) => (this.resposta = value))
  })

  it('deve interceptar a api e exibir resultados', () => {

    cy.intercept('GET', `${Cypress.env('API_URL')}`, {
      body: this.resposta,

      
    })
    cy.get('[data-cy="pesquisar"]').type("Ethereum")
  
  
  
  })
})



