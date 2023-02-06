class LoginPage{
    NavigateCite(){
        cy.visit('https://stretchzone.knetk.io/Admin')
    }

    login(email,password){
        cy.get('#UserName').should('be.visible').type(email)
        cy.get('#Password').should('be.visible').type(password)
        cy.get('#userlogin').should('be.visible').click({ force: true });
        
    }
    warningMessageEmail(warningMessageEmail){
        cy.get('.toast-message').should('contains.text',warningMessageEmail)
    }
    warningMessagePassword(warningMessagePassword){
        cy.get('.toast-message').should('contains.text',warningMessagePassword)
    }
    successfullLogin(){
        cy.get('#FromDate').should('be.visible')
    }
}
export default LoginPage