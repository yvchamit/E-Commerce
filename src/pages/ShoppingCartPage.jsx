import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../sections/shoppingCart/CartItem";
import OrderSummary from "../sections/shoppingCart/OrderSummary";
import CartFavorites from "../sections/shoppingCart/CartFavorites";
import SignUpFooterInfo from "../sections/singUp/SignUpFooterInfo";
import SignUpHeader from "../sections/singUp/SignUpHeader";

const ShoppingCartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  const totalPrice = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <SignUpHeader />
      <div className="max-w-page mx-auto py-12 px-8">
        {/* Sayfa Başlığı */}
        <h2 className="text-2xl font-bold mb-8 text-[#252B42]">
          {`My Cart (${totalItems} ${totalItems === 1 ? "item" : "items"})`}
        </h2>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* SOL SÜTUN: Ürün Listesi */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {cart.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            {/* SAĞ SÜTUN: Sipariş Özeti */}
            <div className="lg:col-span-4 sticky top-28">
              <OrderSummary totalPrice={totalPrice} />
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-cart-shopping text-3xl text-gray-300"></i>
              </div>
            </div>
            <p className="text-xl text-[#737373] mb-6">
              Your cart is currently empty.
            </p>
            <Link
              to="/shop"
              className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a8cd3] transition-all inline-block"
            >
              Start Shopping
            </Link>
          </div>
        )}
        <CartFavorites />
      </div>
      <SignUpFooterInfo/>
    </div>
  );
};

export default ShoppingCartPage;
