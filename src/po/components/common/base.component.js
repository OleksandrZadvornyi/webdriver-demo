class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get rootElement() {
        return $(this.rootSelector);
    }
}

module.exports = BaseComponent;