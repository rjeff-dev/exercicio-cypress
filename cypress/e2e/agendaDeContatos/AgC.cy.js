describe('Agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

    it('deve adicionar contato', () => {
      cy.get('input[placeholder="Nome"]').type("Roberto Jefferson")
      cy.get('input[placeholder="E-mail"]').type("jeff_xd00@hotmail.com")
      cy.get('input[placeholder="Telefone"]').type("85991199258")

      cy.get('button[type="submit"]').click()

      cy.contains('Jeff').should('exist')
    })

  it('deve editar um contato', () => {
    cy.contains('Roberto Jefferson')
        .parents('.contato')
        .find('.edit')
        .click()
    })

  describe('Remoção', () => {
    it('deve remover contato', () => {
      cy.contains('Roberto Jefferson')
      .parents('.contato')
      .find('.delete')
      .click()
      })
    })
  })
