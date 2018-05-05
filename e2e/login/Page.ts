export class Page {
    fillInput = function (field, value) {
        field.sendKeys(value);
    }

    clickOnLogin = function () {
        this.loginBtn.click();
    }

    getPlaceHolder = function(field) {
        return field.getAttribute('placeholder');
    }
}