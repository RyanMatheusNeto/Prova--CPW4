describe('BackButton', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('deve testar corretamente o botão voltar', () => { 

      cy.get('[data-cy="pesquisar"]').type("Ethereum")

      cy.get(':nth-child(2) > .sc-jwXWPX').click()

      cy.get('[data-cy="botao-voltar"]').click()
    
    })
  })
  