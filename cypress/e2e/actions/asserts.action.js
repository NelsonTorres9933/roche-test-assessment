import MainPageElements from "../locators/mainPage.elements";

class AssertsAction {
  listContent(text) {
    MainPageElements.listItem().should("contains.text", text);
  }
  emptyList() {
    MainPageElements.listItem().should("not.exist");
  }
}
export default new AssertsAction();
