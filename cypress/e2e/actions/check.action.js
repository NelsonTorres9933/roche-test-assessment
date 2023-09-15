import MainPageElements from "../locators/mainPage.elements";

class CheckAction {
  checkEmployee(employee) {
    MainPageElements.employeeCheckBox(employee).click();
  }
  checkAllEmployees() {
    MainPageElements.singleCheckbox().click({ multiple: true });
  }
}
export default new CheckAction();
