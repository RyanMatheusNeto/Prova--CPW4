import * as React from 'react';
import BackLinkPanel from './../../src/components/BackLinkPanel';
import { BrowserRouter } from 'react-router-dom';

describe('<BackLinkPanel />', () => {
    it('should render Title correctly', () => {
  
        cy.mount(
          <BrowserRouter>
            <BackLinkPanel />
          </BrowserRouter>
        )
  
        const buttonLabel = 'Voltar'
  
        cy.get('[data-cy="botao-voltar"]').should('have.text', buttonLabel)
      })
    })