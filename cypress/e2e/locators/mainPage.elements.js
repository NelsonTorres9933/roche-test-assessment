class MainPageElements {
  singleCheckbox() {
    return cy.get(".jqx-tree-grid-checkbox");
  }
  employeeCheckBox(employee) {
    return cy
      .contains(".jqx-tree-grid-title", employee)
      .parent()
      .find(".jqx-tree-grid-checkbox");
  }
  viewSelectedDataButton() {
    return cy.get("#btn");
  }
  listItem() {
    return cy.get(".jqx-listitem-state-normal");
  }
  expandButton() {
    return cy.get(".jqx-tree-grid-collapse-button");
  }
}
export default new MainPageElements();
