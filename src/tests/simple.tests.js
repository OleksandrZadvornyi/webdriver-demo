const { pages } = require("../po");

describe("Doctors page", () => {
    beforeEach(async () => {
        await pages('dashboard').open();
    });

    it("Check page title", async () => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Open modal window for adding a new doctor", async () => {
        await pages('dashboard').sideMenu.item("doctors").click();
        await pages('doctors').listHeaderComponent.addNewDoctorButton.click();
        await expect(pages('doctors').addDoctorComponent.rootElement).toBeDisplayed();
    });

    it("Add a new doctor", async () => {
        await pages('dashboard').sideMenu.item("doctors").click();
        await pages('doctors').listHeaderComponent.addNewDoctorButton.click();
        await pages('doctors').addDoctorComponent.rootElement.waitForDisplayed();

        await pages('doctors').addDoctorComponent.input("name").setValue("John Doe");
        await pages('doctors').addDoctorComponent.input("phone").setValue("1234567890");
        await pages('doctors').addDoctorComponent.input("email").setValue("dr.johndoe@example.com");
        await pages('doctors').addDoctorComponent.input("education").setValue("MD");
        await pages('doctors').addDoctorComponent.input("designation").setValue("Cardiologist");
        await pages('doctors').addDoctorComponent.saveBtn.click();

        await expect(pages('doctors').addDoctorComponent.rootElement).not.toBeDisplayed();
        await expect(pages('doctors').specialistCard(8).name).toHaveText("Dr. John Doe");
        await expect(pages('doctors').specialistCard(8).education).toHaveText("MD");
    });

    it("Close the new doctor modal window", async () => {
        await pages('dashboard').sideMenu.item("doctors").click();
        await pages('doctors').listHeaderComponent.addNewDoctorButton.click();
        await pages('doctors').addDoctorComponent.rootElement.waitForDisplayed();
        await pages('doctors').addDoctorComponent.cancelBtn.click();
        await expect(pages('doctors').addDoctorComponent.rootElement).not.toBeDisplayed();
    });
});
