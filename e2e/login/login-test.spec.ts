import { browser, element, by, protractor} from "protractor"
import { LoginPage } from "./login-page";

// var loginPage = require('./login-page');

describe('validate login', function(){
    const page = new LoginPage();

    beforeEach(function(){
        browser.get('http://localhost:4200/#/login');
    })

    afterEach(function(){
        browser.executeScript('window.localStorage.clear();');
    })

    it('should successfully login', function(){
        page.fillLoginFields('admin@venturus.org.br', 'admin');
        expect(element(by.id('buttonLeave')).isPresent()).toBe(true);
    });

   it('should not login with invalid username', function(){
        page.fillLoginFields('admin', 'admin');
        expect(element(by.id('invalidCredentialsError')).isPresent()).toBeTruthy();
        expect(element(by.id('invalidCredentialsError')).getText()).toEqual('Invalid username and/or password')    
    });

    it('valid username placeholder', function(){
        // expect(element(by.id('inputUsername')).getAttribute('placeholder')).toBe('Username');
        // expect(element(by.id('inputPassword')).getAttribute('placeholder')).toBe('Password');
        expect(page.getPlaceHolder(page.username)).toBe('Username');
        expect(page.getPlaceHolder(page.password)).toBe('Password');

    })
})

        // loginPage.fillInput(loginPage.username, "admin@venturus.org.br");
        // loginPage.fillInput(loginPage.password, "admin");
        // loginPage.clickOnLogin();