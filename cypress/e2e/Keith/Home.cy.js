import data from "../data";
import LoginPage from "../../support/pages/LoginPage";
import HomePage from "../../support/pages/HomePage";

const loginPage = new LoginPage()
const homepage = new HomePage()

describe('Home', () => {
    it('ExportYesterday', () => {
        loginPage.NavigateCite()
        loginPage.login(data.email, data.password)
        homepage.clickDateSelector()
        homepage.enterDateSelector()
        homepage.clickDivision()
        homepage.clickExport()
    }) 
})