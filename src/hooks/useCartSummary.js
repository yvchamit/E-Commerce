import { useSelector } from "react-redux";

export function useCartSummary() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const wishlist = useSelector((state) => state.product.wishlist);

  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  const checkedItems = cart.filter((item) => item.checked);
  const subtotal = checkedItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );
  const shippingCost = subtotal > 500 || subtotal === 0 ? 0 : 29.99;
  const grandTotal = subtotal + shippingCost;

  return {
    totalItems,
    wishlistCount: wishlist.length,
    subtotal,
    shippingCost,
    grandTotal,
  };
}
