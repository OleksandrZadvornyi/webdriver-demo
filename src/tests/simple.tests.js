const DashboardPage = require("../po/pages/dashboard.page");
const DoctorsPage = require("../po/pages/doctors.page");

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe("Doctors page", () => {
    beforeEach(async () => {
        await dashboardPage.open();
    });

    it("Check page title", async () => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Open modal window for adding a new doctor", async () => {
        await dashboardPage.sideMenu.item("doctors").click();
        await doctorsPage.doctorListHeader.addNewDoctorButton.click();
        await expect(doctorsPage.addDoctorModal.rootElement).toBeDisplayed();
    });

    it("Add a new doctor", async () => {
        await dashboardPage.sideMenu.item("doctors").click();
        await doctorsPage.doctorListHeader.addNewDoctorButton.click();
        await doctorsPage.addDoctorModal.rootElement.waitForDisplayed();

        await $('[name="Name"]').setValue("John Doe");
        await $('#DoctorMobile').setValue("1234567890");
        await $('[name="Email"]').setValue("dr.johndoe@example.com");
        await $('[name="Education"]').setValue("MD");
        await $('[name="Designation"]').setValue("Cardiologist");
        await $('.e-footer-content button.e-primary').click();

        await expect(doctorsPage.addDoctorModal.rootElement).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText("Dr. John Doe");
        await expect($('#Specialist_8').$('.education')).toHaveText("MD");
    });

    it("Close the new doctor modal window", async () => {
        await dashboardPage.sideMenu.item("doctors").click();
        await doctorsPage.doctorListHeader.addNewDoctorButton.click();
        await doctorsPage.addDoctorModal.rootElement.waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(doctorsPage.addDoctorModal.rootElement).not.toBeDisplayed();
    });
});
