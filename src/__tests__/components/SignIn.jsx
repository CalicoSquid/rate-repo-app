import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import SignInForm from "../../components/auth/SignInForm";

describe("SignIn", () => {
  describe("SignInForm", () => {
    it("renders correctly and calls onSubmit with the correct values", async () => {
      //const user= {username: "kalle", password: "password"}
      const onSubmit = jest.fn();
      render(<SignInForm onSubmit={onSubmit} />);

      const usernameInput = screen.getByPlaceholderText("Username");
      const passwordInput = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByTestId("submit-button");

      fireEvent.changeText(usernameInput, "kalle");
      fireEvent.changeText(passwordInput, "password");
      await waitFor(async () => {
        fireEvent.press(submitButton);
      })

      screen.debug();
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith({
        username: "kalle",
        password: "password",
      });
    });
  });
});
