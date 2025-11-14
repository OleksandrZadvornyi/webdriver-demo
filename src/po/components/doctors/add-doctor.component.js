const BaseComponent = require('../common/base.component');

class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('.new-doctor-dialog');
    }

    get saveBtn() {
        return this.rootElement.$('.e-footer-content button.e-primary');
    }

    get cancelBtn() {
        return this.rootElement.$('.e-dlg-closeicon-btn');
    }

    /**
     * @param param {'name' | 'phone' | 'email' | 'education' | 'designation'} 
     * @returns WebdriverIO.Element 
     */
    input(param) {
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
            designation: '[name="Designation"]'
        };
        return this.rootElement.$(selectors[param.toLowerCase()]);
    }
}

module.exports = AddDoctorComponent;