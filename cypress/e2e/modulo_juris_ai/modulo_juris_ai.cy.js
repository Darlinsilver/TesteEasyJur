// cypress/integration/create_test.spec.js
describe('CRUD JurisAI - Criar Nova Entrada no Chat', () => {
  it('Devo criar uma nova entrada no chat', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=chat_juris')
    cy.get('button[aria-label="Adicionar"]').click()
    cy.get('input[name="nome"]').type('Novo Teste')
    cy.get('textarea[name="descricao"]').type('Descrição do Novo Teste')
    cy.get('button[type="submit"]').click()
    cy.contains('Novo Teste').should('exist')
  })
})

// cypress/integration/read_test.spec.js
describe('CRUD JurisAI - Ler o Chat', () => {
  it('Devo ler o chat existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=chat_juris')
    cy.contains('Novo Teste').click()
    cy.get('h1').should('contain', 'Novo Teste')
    cy.get('p').should('contain', 'Descrição do Novo Teste')
  })
})

// cypress/integration/update_test.spec.js
describe('CRUD JurisAI - Atualizar o Chat', () => {
  it('Devo atualizar o chat existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=chat_juris')
    cy.contains('Novo Teste').click()
    cy.get('button[aria-label="Editar"]').click()
    cy.get('input[name="nome"]').clear().type('Teste Atualizado')
    cy.get('textarea[name="descricao"]').clear().type('Descrição do Teste Atualizado')
    cy.get('button[type="submit"]').click()
    cy.contains('Teste Atualizado').should('exist')
    cy.contains('Descrição do Teste Atualizado').should('exist')
  })
})

// cypress/integration/delete_test.spec.js
describe('CRUD JurisAI - Apagar o Clhat', () => {
  it('Devo apagar o chat existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=chat_juris')
    cy.contains('Teste Atualizado').click()
    cy.get('button[aria-label="Deletar"]').click()
    cy.get('button[aria-label="Confirmar"]').click()
    cy.contains('Teste Atualizado').should('not.exist')
  })
})
