import AssertsAction from "../actions/asserts.action";
import CheckAction from "../actions/check.action";
import ClickAction from "../actions/click.action";

describe("List of cities of origin", () => {
  it("Verify the city of origin of selected employees", () => {
    ClickAction.expandNames();
    CheckAction.checkEmployee("Andrew");
    CheckAction.checkEmployee("Nancy");
    CheckAction.checkEmployee("Michael");
    CheckAction.checkEmployee("Robert");
    ClickAction.clickOnViewSelectedDataButton();
    AssertsAction.listContent("Andrew is from Tacoma");
    AssertsAction.listContent("Nancy is from Seattle");
    AssertsAction.listContent("Michael is from London");
    AssertsAction.listContent("Robert is from London");
  });
  it("Verify the city of origin of all employees", () => {
    ClickAction.expandNames();
    CheckAction.checkAllEmployees();
    ClickAction.clickOnViewSelectedDataButton();
    AssertsAction.listContent("Andrew is from Tacoma");
    AssertsAction.listContent("Nancy is from Seattle");
    AssertsAction.listContent("Janet is from Kirkland");
    AssertsAction.listContent("Margaret is from Redmond");
    AssertsAction.listContent("Steven is from London");
    AssertsAction.listContent("Michael is from London");
    AssertsAction.listContent("Robert is from London");
    AssertsAction.listContent("Anne is from London");
    AssertsAction.listContent("Laura is from Seattle");
  });
  it("Verify implementation of empty list when not selecting employee", () => {
    ClickAction.clickOnViewSelectedDataButton();
    AssertsAction.emptyList();
  });
});
