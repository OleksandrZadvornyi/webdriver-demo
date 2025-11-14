const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('#plannerSiderBar');
    }
    get name() {
        return this.rootElement.$('.name');
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]'
        };
        return this.rootElement.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;