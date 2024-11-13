// cypress/integration/create_person.spec.js
describe('Pessoas CRUD - Criar uma nova Pessoa (Cliente)', () => {
  it('Devo criar uma nova pessoa', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=pessoas_lista')
    cy.get('button[aria-label="Adicionar"]').click()
    cy.get('input[name="nome"]').type('João Silva')
    cy.get('input[name="email"]').type('joao.silva@example.com')
    cy.get('input[name="telefone"]').type('11987654321')
    cy.get('button[type="submit"]').click()
    cy.contains('João Silva').should('exist')
  })
})

// cypress/integration/read_person.spec.js
describe('Pessoas CRUD - Ler Pessoa', () => {
  it('Devo ler o cadastro de uma pessoa existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=pessoas_lista')
    cy.contains('João Silva').click()
    cy.get('h1').should('contain', 'João Silva')
    cy.get('p').should('contain', 'joao.silva@example.com')
  })
})

// cypress/integration/update_person.spec.js
describe('Pessoas CRUD - Atualizar Pessoa', () => {
  it('Devo atualizar o cadastro de uma pessoa existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=pessoas_lista')
    cy.contains('João Silva').click()
    cy.get('button[aria-label="Editar"]').click()
    cy.get('input[name="nome"]').clear().type('João da Silva')
    cy.get('input[name="telefone"]').clear().type('21987654321')
    cy.get('button[type="submit"]').click()
    cy.contains('João da Silva').should('exist')
    cy.contains('21987654321').should('exist')
  })
})

// cypress/integration/delete_person.spec.js
describe('Pessoas CRUD - Deletar Pessoa', () => {
  it('Devo deletar o cadastro de uma pessoa existentel', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=pessoas_lista')
    cy.contains('João da Silva').click()
    cy.get('button[aria-label="Deletar"]').click()
    cy.get('button[aria-label="Confirmar"]').click()
    cy.contains('João da Silva').should('not.exist')
  })
})

// cypress/integration/update_person.spec.js
describe('Pessoas CRUD - Imprimir Pessoa', () => {
  it('Devo imprimir o cadastro de uma pessoa existente', () => {
    cy.visit('https://app.easyjur.com/sgr/index.php?pg=pessoas_lista')
    cy.contains('João Silva').click()
    cy.get('button[aria-label="Imprimir"]').click()
  })
})
