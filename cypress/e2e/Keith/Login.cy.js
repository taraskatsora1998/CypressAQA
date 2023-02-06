import data from "../data"
import LoginPage from "../../support/pages/LoginPage"

const loginPage = new LoginPage()

describe('login', ()=>{
    it('Login_Valid', ()=> {
        loginPage.NavigateCite()
        loginPage.login(data.email,data.password)
        loginPage.successfullLogin()
    })

    it('Login_InvalidEmail', ()=> {
        loginPage.NavigateCite()
        loginPage.login(data.invalidEmail,data.password)
        loginPage.warningMessageEmail(data.warningMessageEmail)
    })

    it('Login_InvalidPassword', ()=> {
        loginPage.NavigateCite()
        loginPage.login(data.email,data.invalidPasseword)
        loginPage.warningMessagePassword(data.warningMessagePassword)
    })

})