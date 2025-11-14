class SideMenuComponent {
    get rootElement() {
        return $('#plannerSiderBar');
    }
    get name() {
        return this.rootElement.$('.user-name');
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