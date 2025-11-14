const ListHeaderComponent = require("../components/doctors/list-header.component");
const AddDoctorComponent = require("../components/doctors/add-doctor.component");

class DoctorsPage {
    constructor() {
        this.doctorListHeader = new ListHeaderComponent();
        this.addDoctorModal = new AddDoctorComponent();
    }

    open() {
        return browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
    }
}

module.exports = DoctorsPage;