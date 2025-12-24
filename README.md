# WebdriverIO Demo - Appointment Planner

This repository contains an end-to-end (E2E) test automation framework built with **WebdriverIO** and **JavaScript**. It demonstrates the **Page Object Model (POM)** design pattern by automating workflows on the [Syncfusion Appointment Planner](https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard) Angular application.

## 📂 Project Structure

The project follows a modular structure separating configuration, page objects, and test specifications:

```text
src
├── config
│   └── wdio.conf.js       # WebdriverIO configuration
├── po                     # Page Object Model abstraction layer
│   ├── components         # Reusable UI components (Header, SideMenu, etc.)
│   └── pages              # Page classes (Dashboard, Doctors, etc.)
└── tests
    └── simple.tests.js    # Test specifications
```

## 🚀 Key Features

* **Page Object Model (POM):**
  * **Base Classes:** Uses inheritance with `BasePage` and `BaseComponent` to reduce code duplication.
  * **Components:** Modularizes UI elements like the `SideMenuComponent` and `AddDoctorComponent` for reusability across different pages.
  * **Complex Interactions:** Handles specific UI cards, such as the `SpecialistCardComponent` used to identify doctors by ID.


* **Test Scenarios:**
  * Verifying page titles.
  * Navigation via the side menu.
  * Adding new entities (Doctors) via modal windows.
  * Validating successful creation of records.



## 🛠️ Prerequisites

* **Node.js** (v16 or higher recommended)
* **NPM** (Node Package Manager)

## 📦 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/OleksandrZadvornyi/webdriver-demo.git
cd webdriver-demo
npm install
```

## ▶️ Running Tests

To execute the test suite using the provided configuration:

```bash
npx wdio run src/config/wdio.conf.js
```

## 📝 Code Example

**Test Specification (`src/tests/simple.tests.js`):**
The tests utilize chaining to interact with the DOM fluently:

```javascript
it("Add a new doctor", async () => {
    // Navigate to Doctors page
    await pages('dashboard').sideMenu.item("doctors").click();
    
    // Open 'Add Doctor' modal
    await pages('doctors').listHeaderComponent.addNewDoctorButton.click();
    
    // Fill form using the component abstraction
    await pages('doctors').addDoctorComponent.input("name").setValue("John Doe");
    await pages('doctors').addDoctorComponent.saveBtn.click();

    // Verify result
    await expect(pages('doctors').specialistCard(8).name).toHaveText("Dr. John Doe");
});
```

**Page Object Component (`src/po/components/doctors/add-doctor.component.js`):**
Encapsulates selectors and interaction logic:

```javascript
class AddDoctorComponent extends BaseComponent {
    constructor() {
        super('.new-doctor-dialog');
    }

    input(param) {
        const selectors = {
            name: '[name="Name"]',
            // ... other selectors
        };
        return this.rootElement.$(selectors[param.toLowerCase()]);
    }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
