import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  it("renders logo text", () => {
    render(<Header />);
    expect(screen.getByText("Turbo")).toBeInTheDocument();
    expect(screen.getByText("Track")).toBeInTheDocument();
  });

  it("renders hamburger menu button", () => {
    render(<Header />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("closes mobile menu when link clicked", () => {
    render(<Header />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    const pricingLinks = screen.getAllByText("Pricing");
    const lastPricing = pricingLinks[pricingLinks.length - 1];
    fireEvent.click(lastPricing);

    const menu = screen.getByTestId("mobile-menu");
    expect(menu).toHaveStyle("height: 0px");
  });
});
