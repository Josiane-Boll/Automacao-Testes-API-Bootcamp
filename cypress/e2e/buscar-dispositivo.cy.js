/// <reference types="cypress"/>

describe('buscar dispositivos', () => {

    it('Buscar dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/12',
        })
            .then((response) => {
                console.log(resultado.status)
            })
    })
})