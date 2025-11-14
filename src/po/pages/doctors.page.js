const BasePage = require("./base.page");
const ListHeaderComponent = require("../components/doctors/list-header.component");
const AddDoctorComponent = require("../components/doctors/add-doctor.component");

class DoctorsPage extends BasePage {
    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors");
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }
}

module.exports = DoctorsPage;