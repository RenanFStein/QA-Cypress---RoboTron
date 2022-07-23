/// <reference types="cypress" />

describe('Automação de Testes RoboTron', () => {

  beforeEach(() => {
      cy.visit('https://robo-tron-vue.vercel.app/');

  })

  it('Verificação de Status', () => {
    cy.request({
      url: 'https://robo-tron-vue.vercel.app/',

    }).then((resp) => {
      // redirect status code is 302
      expect(resp.status).to.eq(200)

    })
    
    
  })
  
  it('Teste Braço do Robo', () => {
    cy.get('#braco')
      .should('have.value', 0)
      .siblings()
      .contains('-')
      .click()
      .get('#braco')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .get('#braco')
      .should('have.value', 1)
  }),

  it('Teste Blindagem do Robo', () => {
    cy.get('#blindagem')
      .should('have.value', 0)
      .siblings()
      .contains('-')
      .click()
      .get('#blindagem')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .get('#blindagem')
      .should('have.value', 1)
  }),

  it('Teste Núcleos do Robo', () => {
    cy.get('#nucleos')
      .should('have.value', 0)
      .siblings()
      .contains('-')
      .click()
      .get('#nucleos')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .get('#nucleos')
      .should('have.value', 1)
  }),

  it('Teste Pernas do Robo', () => {
    cy.get('#pernas')
      .should('have.value', 0)
      .siblings()
      .contains('-')
      .click()
      .get('#pernas')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .get('#pernas')
      .should('have.value', 1)
  }),

  it('Teste Foguetes do Robo', () => {
    cy.get('#foguetes')
      .should('have.value', 0)
      .siblings()
      .contains('-')
      .click()
      .get('#foguetes')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .get('#foguetes')
      .should('have.value', 1)
  })

  
 
})