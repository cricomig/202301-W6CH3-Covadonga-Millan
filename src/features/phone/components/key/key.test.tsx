import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import { Key } from "./key";

describe("Given the Key component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Key></Key>
      </Provider>
    );
  });
  describe("When it is rendered", () => {
    test("Then it should appear in the screen", () => {
      const element = screen.getByText(/delete/);
      expect(element).toBeInTheDocument();
    });

    test("Then it renders a button", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
