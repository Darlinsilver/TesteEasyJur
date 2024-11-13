describe('Teste de Login', () => {
  it('Deve realizar o login com credenciais validas', () => {
    cy.visit('https://app.easyjur.com')
    cy.get('input[name=email]').type('vaga.qa.teste.pratico@easyjur.com')
    cy.get('input[name=password]').type('QA.teste123')
    cy.get('button[type=submit]').click()
    cy.url().should('include', 'https://app.easyjur.com/sgr/index.php') // Ajuste a URL de verificação conforme necessário
  })

  it('Deve exibir mensagem de erro ao logar com o email invalido', () => {
    cy.visit('https://app.easyjur.com')
    cy.get('input[name=email]').type('invalid@user.com')
    cy.get('input[name=password]').type('invalidpassword')
    cy.get('button[type=submit]').click()
    cy.get('.jconfirm-content') // Ajuste o seletor conforme necessário
      .should('be.visible')
      .and('contain', 'Nenhum usuário encontrado para o e-mail informado.')
  })

  it('Deve exibir mensagem de erro ao logar com a senha invalida', () => {
      cy.visit('https://app.easyjur.com')
      cy.get('input[name=email]').type('vaga.qa.teste.pratico@easyjur.com')
      cy.get('input[name=password]').type('invalidpassword')
      cy.get('button[type=submit]').click()
      cy.get('.jconfirm-content') // Ajuste o seletor conforme necessário
        .should('be.visible')
        .and('contain', 'Senha incorreta. Por favor, tente novamente.')
    })
})
