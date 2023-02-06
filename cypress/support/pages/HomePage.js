class HomePage{

    clickAgencies(){
        cy.get('.sidebar-menu > :nth-child(1) > :nth-child(3) > a').should('be.visible').click({ force: true });
    }

    clickAddAgencies(){
        cy.get('.text-capitalize').should('be.visible').click({ force: true });
    }
    clickDateSelector(){
        cy.get('#select2-chadate-container').should('be.visible').click({ force: true });
    }
    enterDateSelector(dateSelector){
       cy.xpath("//*[contains(@class,'select2-search__field')]").type("Yesterday")
       cy.xpath("//li[contains(text(),'Yesterday')]").click({ force: true });
    }
    clickDivision(){
        cy.get('#select2-DivisionId-container').type('ABBASI{enter}')
    }
    clickExport(){
        cy.xpath("(//*[contains(text(),'Export')])[1]").click({ force: true });
    }
    successfulNavigate(){
        cy.get('.text-capitalize').should('be.visible')
    }

    subbessfullClickAgencies(){
        cy.get('#GenratePassword').should('be.visible')
    }

}
export default HomePage