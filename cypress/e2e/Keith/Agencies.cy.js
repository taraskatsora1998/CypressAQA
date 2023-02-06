import data from "../data";
import LoginPage from "../../support/pages/LoginPage"
import HomePage from "../../support/pages/HomePage"
import AgenciesPage from "../../support/pages/AgenciesPage";

const loginPage = new LoginPage();
const homepage = new HomePage();
const agenciesPage = new AgenciesPage();

describe('Agencies', () => {
    it('AgenciesClick', () =>{
       loginPage.NavigateCite()
       loginPage.login(data.email,data.password)
        homepage.clickAgencies()
        homepage.successfulNavigate()
       
    })

  // it('AgenciesClick', () => {
      //  loginPage.NavigateCite()
      //  loginPage.login(data.email,data.password)
      //  homepage.clickAgencies()
     //   homepage.clickAddAgencies()
     //   homepage.subbessfullClickAgencies()
    //})

    it('AgenciesViewUser', () => {
        loginPage.NavigateCite()
        loginPage.login(data.email, data.password)
        homepage.clickAgencies()
        agenciesPage.clickPagination()
        agenciesPage.viewUser()
        agenciesPage.successfullViewAgencie()
        agenciesPage.clickCloseBtn()
    })
})