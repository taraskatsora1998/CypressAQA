class AgenciesPage{

    clickPagination(){
        cy.get(':nth-child(3) > .page-link').click({ force: true });
    }

    viewUser(){
        cy.get('[href="/Admin/Agency/ViewCrentailDetail/7"] > .fa').click({ force: true });
    }

    successfullViewAgencie(){
        cy.get(':nth-child(4) > .col-lg-2').should('be.visible')
    }

    clickCloseBtn(){
        cy.get('.btn').click({ force: true });
    }
}

export default AgenciesPage