describe("navigation", () => {
  it("should visit home", () => {
    cy.visit("/")
  });
  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });
  it("should add Scented Blade to cart", () => {
    cy.visit("/")
    cy.contains('Add').click({force: true})
    cy.visit("/cart")
    cy.get(".cart-show").should("be.visible")
    cy.contains('+').click()
    cy.get(".cart-show").should("be.visible")
  });
})