describe('Agenda de contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('deve adicionar contato', () => {

    const nome = `Roberto ${Date.now()}`
    const email = `teste${Date.now()}@mail.com`
    const telefone = '85999999999'

    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)

    cy.get('button[type="submit"]').click()

    cy.contains(nome)
      .parents('.contato')
      .within(() => {
        cy.contains(nome).should('exist')
        cy.contains(email).should('exist')
        cy.contains(telefone).should('exist')
      })
  })

  it('deve editar um contato', () => {

    const nome = `Roberto ${Date.now()}`
    const nomeEditado = `Jefferson ${Date.now()}`
    const email = `teste${Date.now()}@mail.com`
    const telefone = '85999999999'

    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button[type="submit"]').click()

    cy.contains(nome)
      .parents('.contato')
      .find('.edit')
      .click()

    cy.get('input[placeholder="Nome"]')
      .clear()
      .type(nomeEditado)

    cy.get('button[type="submit"]').click()

    cy.contains(nomeEditado)
      .parents('.contato')
      .within(() => {
        cy.contains(nomeEditado).should('exist')
        cy.contains(email).should('exist')
      })
  })

  it('deve remover um contato', () => {

    const nome = `Roberto ${Date.now()}`
    const email = `teste${Date.now()}@mail.com`
    const telefone = '85999999999'

    // cria
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button[type="submit"]').click()

    cy.contains(nome)
      .parents('.contato')
      .find('.delete')
      .click()

    cy.contains(nome).should('not.exist')
  })

})
