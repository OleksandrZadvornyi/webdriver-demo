const BaseComponent = require("../common/base.component");

class SpecialistCardComponent extends BaseComponent {
    constructor(id) {
        super(`#Specialist_${id}`);
    }

    get name() {
        return this.rootElement.$('.name');
    }

    get education() {
        return this.rootElement.$('.education');
    }
}

module.exports = SpecialistCardComponent;