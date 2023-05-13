import { BrowserRouter } from "react-router-dom"
import FontStyles from "../../assets/fonts/fonts"
import { AppTitle } from "./styles"



describe('<Header />', () => {
    it('should render Title correctly', () => {
    
  
        cy.mount(
          <BrowserRouter>
            <FontStyles />
            <AppTitle>Crypto Search</AppTitle>
          </BrowserRouter>
        )
  
        const title = 'Crypto Search'
  
  
        cy.get('[data-cy="titulo-header"]').should('have.text', title)
      })
    }) 
  
  