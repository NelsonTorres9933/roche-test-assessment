import MainPageElements from "../locators/mainPage.elements";

class ClickAction {
  clickOnViewSelectedDataButton() {
    MainPageElements.viewSelectedDataButton().click();
  }
  expandNames() {
    MainPageElements.expandButton().click();
  }
}
export default new ClickAction();
