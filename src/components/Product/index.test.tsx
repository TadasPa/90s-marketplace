import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from ".";
import { PRODUCT_A, PRODUCT_B } from "../../data/products";

test("renders Product successfully", () => {
  const { container } = render(
    <Product product={PRODUCT_A} onAdd={jest.fn()} />
  );
  expect(container).toMatchSnapshot();
});

test("calls add callback", () => {
  const handleAddMock = jest.fn();
  const addButtonTestId = `product-add-to-cart-${PRODUCT_B.id}-testid`;

  render(<Product product={PRODUCT_B} onAdd={handleAddMock} />);

  userEvent.click(screen.getByTestId(addButtonTestId));
  expect(handleAddMock).toHaveBeenCalledWith(PRODUCT_B);
});
