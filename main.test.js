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
  it("should clear input field and not display error message when a valid email address is entered", () => {
    // Assign value with test strng input
    emailAddressInput.value = "test@example.com";

    // Simulates a button click
    getStartedButton.click();

    // Assert that when the email is entered, no error string value will display
    expect(emailAddressInput.value).toBe("test@example.com");
    expect(errorDisplay.textContent).toBe("");
  });
});
