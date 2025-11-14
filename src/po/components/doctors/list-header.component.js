class ListHeaderComponent {
    get rootElement() {
        return $('.specialization-types');
    }

    get addNewDoctorButton() {
        return this.rootElement.$('button.e-control');
    }
}

module.exports = ListHeaderComponent;