import { render, screen } from "@testing-library/react";
import { LocalStorageMock } from "@react-mock/localstorage";
import App from ".";
import { PRODUCT_A } from "../../data/products";
import { PRODUCTS_KEY } from "../../storage/constants";

const CART_LINK_TESTID = "cart-link";

test("renders App successfully", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test("shows cart count from localStorage", async () => {
  render(
    <LocalStorageMock
      items={{ [PRODUCTS_KEY]: JSON.stringify([{ ...PRODUCT_A, amount: 5 }]) }}
    >
      <App />
    </LocalStorageMock>
  );
  expect(await screen.findByTestId(CART_LINK_TESTID)).toHaveTextContent("5");
});
