// cypress/integration/create_event.spec.js
describe('Agenda CRUD - Crira um Nlovo Evento na Agenda', () => {
  it('Devo criar um novo evento na agenda', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=agenda_calendar')
    cy.get('button[aria-label="Adicionar"]').click()
    cy.get('input[name="titulo"]').type('Reunião de Teste')
    cy.get('input[name="data"]').type('2024-11-11')
    cy.get('textarea[name="descricao"]').type('Descrição da reunião de teste')
    cy.get('button[type="submit"]').click()
    cy.contains('Reunião de Teste').should('exist')
  })
})

// cypress/integration/read_event.spec.js
describe('Agenda CRUD - Ler o Evento', () => {
  it('Devo ler o evento existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=agenda_calendar')
    cy.contains('Reunião de Teste').click()
    cy.get('h1').should('contain', 'Reunião de Teste')
    cy.get('p').should('contain', 'Descrição da reunião de teste')
  })
})

// cypress/integration/update_event.spec.js
describe('Agenda CRUD - Atualizar o Evento', () => {
  it('Devo atualziar o evento existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=agenda_calendar')
    cy.contains('Reunião de Teste').click()
    cy.get('button[aria-label="Editar"]').click()
    cy.get('input[name="titulo"]').clear().type('Reunião Atualizada')
    cy.get('textarea[name="descricao"]').clear().type('Descrição da reunião atualizada')
    cy.get('button[type="submit"]').click()
    cy.contains('Reunião Atualizada').should('exist')
    cy.contains('Descrição da reunião atualizada').should('exist')
  })
})

// cypress/integration/delete_event.spec.js
describe('Agenda CRUD - Apagar o Evento', () => {
  it('Devo apagar o evento existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=agenda_calendar')
    cy.contains('Reunião Atualizada').click()
    cy.get('button[aria-label="Deletar"]').click()
    cy.get('button[aria-label="Confirmar"]').click()
    cy.contains('Reunião Atualizada').should('not.exist')
  })
})
