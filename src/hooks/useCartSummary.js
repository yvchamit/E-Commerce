import { useSelector } from "react-redux";

export function useCartSummary() {
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.product.wishlist);

  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  return { totalItems, wishlistCount: wishlist.length };
}