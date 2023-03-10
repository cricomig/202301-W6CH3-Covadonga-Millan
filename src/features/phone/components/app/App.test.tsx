import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/hang/i)).toBeInTheDocument();
});
