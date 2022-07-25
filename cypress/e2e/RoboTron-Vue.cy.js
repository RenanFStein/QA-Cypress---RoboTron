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
      .log('Não deve permitir diminir o braço')
      .get('.estatistica-titulo')
      .contains('Força') 
      .siblings()
      .contains('773')
      .get('.estatistica-titulo')
      .contains('Poder') 
      .siblings()
      .contains('630')
      .get('.estatistica-titulo')
      .contains('Energia') 
      .siblings()
      .contains('289')
      .get('.estatistica-titulo')
      .contains('Velocidade') 
      .siblings()
      .contains('597')
      

    cy.get('#braco')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .log('Teste') 
      .get('#braco')
      .should('have.value', 1)
      .get('.estatistica-numero')
      .should(($lis) => {
        expect($lis, 'Potencia').to.have.length(4)
        expect($lis.eq(0), 'Força').to.contain('802')
        expect($lis.eq(1), 'Poder').to.contain('665')
        expect($lis.eq(2), 'Energia').to.contain('268')
        expect($lis.eq(3), 'Velocidade').to.contain('592')
      })
      cy.get('#braco')
      .should('have.value', 1)
      .siblings()
      .contains('-')
      .click()
      .log('Teste') 
      .get('#braco')
      .should('have.value', 0)
      .get('.estatistica-numero')
      .should(($lis) => {
        expect($lis, 'Potencia').to.have.length(4)
        expect($lis.eq(0), 'Força').to.contain('773')
        expect($lis.eq(1), 'Poder').to.contain('630')
        expect($lis.eq(2), 'Energia').to.contain('289')
        expect($lis.eq(3), 'Velocidade').to.contain('597')
      })
      
      


    
  }),
  
  it('Teste Blindagem do Robo', () => {

    cy.get('#blindagem')
    .should('have.value', 0)
    .siblings()
    .contains('-')
    .click()
    .log('Teste') 
    .get('#blindagem')
    .should('have.value', 0)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('773')
      expect($lis.eq(1), 'Poder').to.contain('630')
      expect($lis.eq(2), 'Energia').to.contain('289')
      expect($lis.eq(3), 'Velocidade').to.contain('597')
      })
 
      

    cy.get('#blindagem')
      .should('have.value', 0)
      .siblings()
      .contains('+')
      .click()
      .log('Teste') 
      .get('#blindagem')
      .should('have.value', 1)
      .get('.estatistica-numero')
      .should(($lis) => {
        expect($lis, 'Potencia').to.have.length(4)
        expect($lis.eq(0), 'Força').to.contain('814')
        expect($lis.eq(1), 'Poder').to.contain('650')
        expect($lis.eq(2), 'Energia').to.contain('289')
        expect($lis.eq(3), 'Velocidade').to.contain('577')
      })
      cy.get('#blindagem')
      .should('have.value', 1)
      .siblings()
      .contains('-')
      .click()
      .log('Teste') 
      .get('#blindagem')
      .should('have.value', 0)
      .get('.estatistica-numero')
      .should(($lis) => {
        expect($lis, 'Potencia').to.have.length(4)
        expect($lis.eq(0), 'Força').to.contain('773')
        expect($lis.eq(1), 'Poder').to.contain('630')
        expect($lis.eq(2), 'Energia').to.contain('289')
        expect($lis.eq(3), 'Velocidade').to.contain('597')
      })
      
})

it('Teste Nucleos do Robo', () => {

  cy.get('#nucleos')
  .should('have.value', 0)
  .siblings()
  .contains('-')
  .click()
  .log('Teste') 
  .get('#nucleos')
  .should('have.value', 0)
  .get('.estatistica-numero')
  .should(($lis) => {
    expect($lis, 'Potencia').to.have.length(4)
    expect($lis.eq(0), 'Força').to.contain('773')
    expect($lis.eq(1), 'Poder').to.contain('630')
    expect($lis.eq(2), 'Energia').to.contain('289')
    expect($lis.eq(3), 'Velocidade').to.contain('597')
    })

    

  cy.get('#nucleos')
    .should('have.value', 0)
    .siblings()
    .contains('+')
    .click()
    .log('Teste') 
    .get('#nucleos')
    .should('have.value', 1)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('773')
      expect($lis.eq(1), 'Poder').to.contain('637')
      expect($lis.eq(2), 'Energia').to.contain('337')
      expect($lis.eq(3), 'Velocidade').to.contain('573')
    })
    cy.get('#nucleos')
    .should('have.value', 1)
    .siblings()
    .contains('-')
    .click()
    .log('Teste') 
    .get('#nucleos')
    .should('have.value', 0)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('773')
      expect($lis.eq(1), 'Poder').to.contain('630')
      expect($lis.eq(2), 'Energia').to.contain('289')
      expect($lis.eq(3), 'Velocidade').to.contain('597')
    })
    
})

it('Teste Pernas do Robo', () => {

  cy.get('#pernas')
  .should('have.value', 0)
  .siblings()
  .contains('-')
  .click()
  .log('Teste') 
  .get('#pernas')
  .should('have.value', 0)
  .get('.estatistica-numero')
  .should(($lis) => {
    expect($lis, 'Potencia').to.have.length(4)
    expect($lis.eq(0), 'Força').to.contain('773')
    expect($lis.eq(1), 'Poder').to.contain('630')
    expect($lis.eq(2), 'Energia').to.contain('289')
    expect($lis.eq(3), 'Velocidade').to.contain('597')
    })

    

  cy.get('#pernas')
    .should('have.value', 0)
    .siblings()
    .contains('+')
    .click()
    .log('Teste') 
    .get('#pernas')
    .should('have.value', 1)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('800')
      expect($lis.eq(1), 'Poder').to.contain('651')
      expect($lis.eq(2), 'Energia').to.contain('257')
      expect($lis.eq(3), 'Velocidade').to.contain('639')
    })
    cy.get('#pernas')
    .should('have.value', 1)
    .siblings()
    .contains('-')
    .click()
    .log('Teste') 
    .get('#pernas')
    .should('have.value', 0)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('773')
      expect($lis.eq(1), 'Poder').to.contain('630')
      expect($lis.eq(2), 'Energia').to.contain('289')
      expect($lis.eq(3), 'Velocidade').to.contain('597')
    })
    
})

it.only('Teste Foguetes do Robo', () => {

  cy.get('#foguetes')
  .should('have.value', 0)
  .siblings()
  .contains('-')
  .click()
  .log('Teste') 
  .get('#foguetes')
  .should('have.value', 0)
  .get('.estatistica-numero')
  .should(($lis) => {
    expect($lis, 'Potencia').to.have.length(4)
    expect($lis.eq(0), 'Força').to.contain('773')
    expect($lis.eq(1), 'Poder').to.contain('630')
    expect($lis.eq(2), 'Energia').to.contain('289')
    expect($lis.eq(3), 'Velocidade').to.contain('597')
    })

    

  cy.get('#foguetes')
    .should('have.value', 0)
    .siblings()
    .contains('+')
    .click()
    .log('Teste') 
    .get('#foguetes')
    .should('have.value', 1)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('773')
      expect($lis.eq(1), 'Poder').to.contain('658')
      expect($lis.eq(2), 'Energia').to.contain('289')
      expect($lis.eq(3), 'Velocidade').to.contain('595')
    })
    cy.get('#foguetes')
    .should('have.value', 1)
    .siblings()
    .contains('-')
    .click()
    .log('Teste') 
    .get('#pernas')
    .should('have.value', 0)
    .get('.estatistica-numero')
    .should(($lis) => {
      expect($lis, 'Potencia').to.have.length(4)
      expect($lis.eq(0), 'Força').to.contain('773')
      expect($lis.eq(1), 'Poder').to.contain('630')
      expect($lis.eq(2), 'Energia').to.contain('289')
      expect($lis.eq(3), 'Velocidade').to.contain('597')
    })
    
})






})
