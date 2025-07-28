// cypress/e2e/header.cy.js

describe("Header Component E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("Desktop View", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it("should display the logo and desktop navigation", () => {
      cy.get("header").contains("TurboTrack");
      cy.get("header").contains("Engine").should("be.visible");

      cy.get("nav").contains("Home").should("be.visible");
      cy.get("nav").contains("Features").should("be.visible");
      cy.get("nav").contains("Pricing").should("be.visible");
      cy.get("nav").contains("Contact").should("be.visible");
    });

    it("should not display the hamburger menu icon", () => {
      cy.get('button[aria-label="Toggle menu"]').should("not.be.visible");
    });
  });

  context("Mobile View", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("should display the logo and hamburger menu, but hide desktop nav", () => {
      cy.get("header").contains("TurboTrack");
      cy.get("header").contains("Engine").should("not.be.visible");

      cy.get("nav").should("not.be.visible");

      cy.get('button[aria-label="Toggle menu"]').should("be.visible");
    });

    it("should open and close the mobile menu on hamburger click", () => {
      cy.get('[data-testid="mobile-menu"]').should("not.exist");

      cy.get('button[aria-label="Toggle menu"]').click();

      cy.get('[data-testid="mobile-menu"]').should("be.visible");
      cy.get('[data-testid="mobile-menu"]')
        .contains("Home")
        .should("be.visible");

      cy.get('button[aria-label="Toggle menu"]').click();

      cy.get('[data-testid="mobile-menu"]').should("not.exist");
    });

    it("should close the mobile menu when a link is clicked", () => {
      cy.get('button[aria-label="Toggle menu"]').click();
      cy.get('[data-testid="mobile-menu"]').should("be.visible");

      cy.get('[data-testid="mobile-menu"]').contains("Features").click();

      cy.get('[data-testid="mobile-menu"]').should("not.exist");
    });
  });
});
