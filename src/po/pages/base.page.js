const { HeaderComponent, SideMenuComponent } = require('../components');

class BasePage {
    constructor(url) {
        this.url = url;
        this.header = new HeaderComponent();
        this.sideMenu = new SideMenuComponent();
    }

    open() {
        return browser.url(this.url);
    }
}
module.exports = BasePage;