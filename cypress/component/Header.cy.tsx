import * as React from 'react';
import Header from './../../src/components/Header';

describe('<Header />', () => {
    it('should render Title correctly', () => {
        cy.mount(
          <>
            <Header />
          </>
        )
  
        const title = 'Crypto Search'
  
        cy.get('[data-cy="titulo-header"]').should('have.text', title)
      })
    }) 
  
  