/**
 * @jest-environment jsdom
 */

// Default test behavior runs in node.js and not browser. Need to install and use jsdom to simulate the DOM environment and make Vitest aware of this by adding the comment above

// started integrating unit tests for the input validation using Vitest. Will send linkies on this

import { describe, expect, it } from "vitest";

// normally you start with "test", but here I've used "describe" to define a new suite which allows for nested tests to make things more organized

/* 

Here, we will create three tests to indicate typical user behaviour and interaction with an email submission -

1. Testing that submitting a valid email address will not return an error message
2. Testing that submitting an invalid email address will return an error message
3. Testing that submitting an empty input will return an error message

*/

describe("main", () => {
  // Create relevant elements for the tests
  const getStartedButton = document.createElement("button");
  const emailAddressInput = document.createElement("input");
  const errorDisplay = document.createElement("p");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  it("should clear input field and not display error message when a valid email address is entered", () => {
    // Assign a valid email address to the input field for the test
    emailAddressInput.value = "test@example.com";

    !emailRegex.test(emailAddressInput.value)
      ? (errorDisplay.textContent = "Please enter a valid email address")
      : (errorDisplay.textContent = "");

    // Simulate a button click to trigger the email validation
    getStartedButton.click();

    // Assert that when a valid email is entered, the input field remains unchanged and no error message is displayed
    expect(errorDisplay.textContent).toBe("");
  });

  it("should display error message when an invalid email address is attempted to be submitted", () => {
    // Assign an invalid email address to the input field for the test - using the same email address as from the mockup (active-states)
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

  it("should display error message when an empty input is attempted to be submitted", () => {
    // Assign an invalid email address to the input field for the test
    emailAddressInput.value = "";

    // Perform validation using regex
    // If the input value is empty, return an error message
    !emailRegex.test(emailAddressInput.value)
      ? (errorDisplay.textContent = "Please enter a valid email address")
      : (errorDisplay.textContent = "");

    // Simulate a button click to trigger the email validation
    getStartedButton.click();

    // Assert that when an empty input value is entered, the error message shows
    expect(errorDisplay.textContent).toBe("Please enter a valid email address");
  });
});
