describe("List of cities of origin", () => {
  it("Verify the city of origin of selected employees", () => {
    cy.contains(".jqx-tree-grid-title", "Andrew")
      .parent()
      .find(".jqx-tree-grid-checkbox")
      .click();
    cy.get("#btn").click();
    cy.get(".jqx-listitem-state-normal").should(
      "contains.text",
      "Andrew is from Tacoma"
    );
  });
});
