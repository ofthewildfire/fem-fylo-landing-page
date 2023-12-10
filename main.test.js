/**
 * @jest-environment jsdom
 */

// Default test behavior runs in node.js and not browser. Need to install and use jsdom to simulate the DOM environment and make Vitest aware of this by adding the comment above

// started integrating unit tests for the input validation using Vitest. Will send linkies on this

import { describe, expect, it } from "vitest";

describe("main", () => {
  // Create relevant elements for the test
  const getStartedButton = document.createElement("button");
  const emailAddressInput = document.createElement("input");
  const errorDisplay = document.createElement("p");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it("should clear input field and not display error message when a valid email address is entered", () => {
    // Assign a valid email address to the input field for the test
    emailAddressInput.value = "test@example.com";

    // Simulate a button click to trigger the email validation
    getStartedButton.click();

    // Assert that when a valid email is entered, the input field remains unchanged and no error message is displayed
    expect(errorDisplay.textContent).toBe("");
  });

  it("should display error message when email address input field contains only special characters", () => {
    // Assign an invalid email address to the input field for the test
    emailAddressInput.value = "johnappleseed#mail.com";

    // Perform validation using regex
    // If the email is invalid, display the error message
    // Duplication of this regex is to test logic will work in isolation
    !emailRegex.test(emailAddressInput.value)
      ? (errorDisplay.textContent = "Please enter a valid email address")
      : (errorDisplay.textContent = "");

    // Simulate a button click to trigger the email validation
    getStartedButton.click();

    // Assert that when an invalid email is entered, the error message shows
    expect(errorDisplay.textContent).toBe("Please enter a valid email address");
  });
});
