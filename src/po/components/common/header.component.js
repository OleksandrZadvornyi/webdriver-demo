const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.planner-header');
    }
    get logoutBtn() {
        return this.rootElement.$('.logout-icon-container');
    }
}
module.exports = HeaderComponent;