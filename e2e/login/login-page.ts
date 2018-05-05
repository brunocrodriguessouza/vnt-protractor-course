import { element, by } from "protractor";
import { Page } from "./Page";


export class LoginPage extends Page {
    username = element(by.id('inputUsername'));
    password = element(by.id('inputPassword'));
    loginBtn = element(by.id('loginBtn'));

    fillLoginFields(username, password) {
        this.fillInput(this.username, username);
        this.fillInput(this.password, password);
        this.clickOnLogin();
    }
}


// var LoginPage = function() {
//     this.username = element(by.id('inputUsername'));
//     this.password = element(by.id('inputPassword'));
//     this.loginBtn = element(by.id('loginBtn'));

//     this.fillInput = function(field, value) {
//         field.sendKeys(value);
//     }

//     this.clickOnLogin = function() {
//         this.loginBtn.click();
//     }
// }

// module.exports = new LoginPage();