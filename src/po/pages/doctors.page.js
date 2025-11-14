const BasePage = require("./base.page");
const { ListHeaderComponent, AddDoctorComponent, SpecialistCardComponent } = require("../components");

class DoctorsPage extends BasePage {
    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors");
        this.listHeaderComponent = new ListHeaderComponent();
        this.addDoctorComponent = new AddDoctorComponent();
    }

    specialistCard(id) {
        return new SpecialistCardComponent(id);
    }
}

module.exports = DoctorsPage;