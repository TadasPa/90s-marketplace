import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from ".";
import { PRODUCT_A, PRODUCT_B } from "../../data/products";

test("renders Cart successfully with products", () => {
  const { container } = render(
    <Cart
      products={[
        { ...PRODUCT_A, amount: 5 },
        { ...PRODUCT_B, amount: 2 },
      ]}
      onRemove={jest.fn()}
    />
  );
  expect(container).toMatchSnapshot();
});

test("calls remove callback", () => {
  const handleRemoveMock = jest.fn();
  const removeButtonTestId = `remove-button-${PRODUCT_A.id}-testid`;
  const cartProduct = { ...PRODUCT_A, amount: 1 };

  render(<Cart products={[cartProduct]} onRemove={handleRemoveMock} />);

  userEvent.click(screen.getByTestId(removeButtonTestId));
  expect(handleRemoveMock).toHaveBeenCalledWith(cartProduct);
});
