describe('My First Test', () => {
  // it('Visits the initial project page', () => {
  //   cy.visit('/')
  //   cy.contains('Welcome')
  //   cy.contains('sandbox app is running!')
  // })

  // beforeEach(() => {
  //   cy.visit('/')
  // })

  it('debería de poder crear una nueva tarea', () => {
    // const tituloTarea = 'Hacer test con Cypress'
    cy.fixture('tareaACrear.json')
      .then(({titulo}) => {

        cy.visit('/')

        cy.contains('a', 'Nueva tarea')
          .click()

        cy.get('[data-cy="titulo"]')
          .type(titulo)
          // .type(tituloTarea)

        cy.get('button[type="submit"]')
          .click()

        cy.screenshot('inicio', {
          blackout: ['h2']
        })

        cy.get('li')
          .last()
          .should('have.text', titulo)

      })

  })

  xit('debería de poder cargar las tareas', () => {
    cy.intercept('/angular-sngular', { fixture: 'datosTareas' }).as('getTareas')
    cy.visit('/')

    cy.wait('@getTareas')

    cy.get('li')
      .should('have.length', 3)
  })



})
