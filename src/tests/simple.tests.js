describe("Doctors page", () => {
    beforeEach(async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    });

    it("Check page title", async () => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Open modal window for adding a new doctor", async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await expect($('.new-doctor-dialog')).toBeDisplayed();
    });

    it("Add a new doctor", async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();

        await $('[name="Name"]').setValue("John Doe");
        await $('#DoctorMobile').setValue("1234567890");
        await $('[name="Email"]').setValue("dr.johndoe@example.com");
        await $('[name="Education"]').setValue("MD");
        await $('[name="Designation"]').setValue("Cardiologist");
        await $('.e-footer-content button.e-primary').click();

        await expect($('.new-doctor-dialog')).not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText("Dr. John Doe");
        await expect($('#Specialist_8').$('.education')).toHaveText("MD");
    });

    it("Close the new doctor modal window", async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    });
});
