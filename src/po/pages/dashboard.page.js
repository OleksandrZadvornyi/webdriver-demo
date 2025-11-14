const BasePage = require("./base.page");

class DashboardPage extends BasePage {
    constructor() {
        super("/showcase/angular/appointmentplanner/#/dashboard");
    }
}

module.exports = DashboardPage;