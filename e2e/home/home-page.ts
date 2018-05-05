import { element, by } from "protractor";

var HomePage = function() {
    this.linkLogout = function() {
        return element(by.id('linkLogout'));
    }

    this.element(by.id("logout"));
}

module.exports = new HomePage();