import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const { cart } = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  return (
    <div className="absolute right-0 top-full w-80 bg-white shadow-2xl border border-gray-100 rounded-lg z-100 p-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
      {/* 1. Başlık */}
      <h3 className="font-bold text-[#252B42] mb-4 pb-2 text-base border-b border-gray-50">
        My Cart ({totalItems} {totalItems === 1 ? "Item" : "Items"})
      </h3>

      {/* 2. Ürün Listesi */}
      <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={item.product.id || index}
              className="flex gap-4 py-3 border-b border-gray-50 last:border-0"
            >
              <div className="w-14 h-16 shrink-0">
                <Link
                  to={`/product/${item.product.id}/${item.product.name.toLowerCase().replaceAll(" ", "-")}`}
                  className="w-14 h-16 shrink-0 block overflow-hidden rounded shadow-sm hover:opacity-80 transition-opacity"
                >
                  <img
                    src={item.product.images?.[0]?.url || item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </Link>
              </div>

              <div className="flex flex-col flex-1 min-w-0 justify-center">
                <h4 className="text-[13px] font-bold text-[#252B42] truncate">
                  {item.product.name}
                </h4>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[11px] text-[#737373]">
                    Qty: {item.count}
                  </span>
                  <span className="text-[13px] font-bold text-[#23A6F0]">
                    {(item.product.price * item.count).toLocaleString()} TL
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-sm text-[#737373] font-medium italic">
              Your cart is currently empty.
            </p>
          </div>
        )}
      </div>

      {/* 3. Özet ve Butonlar */}
      {cart.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {/* Toplam Bilgisi */}
          <div className="flex justify-between items-center mb-4 px-1">
            <span className="text-sm font-semibold text-[#737373]">
              Subtotal:
            </span>
            <span className="text-lg font-bold text-[#252B42]">
              {subtotal.toLocaleString()} TL
            </span>
          </div>

          <div className="flex gap-2">
            {/* Sepete Git - İkincil Buton */}
            <Link
              to="/shopping-cart"
              className="flex-1 py-3 text-center border border-[#23A6F0] text-[#23A6F0] text-[12px] font-bold rounded hover:bg-blue-50 transition-all"
            >
              GO TO CART
            </Link>

            {/* Ödemeye Geç - Birincil Buton */}
            <Link
              to="/create-order"
              className="flex-1 py-3 text-center bg-[#23A6F0] text-white text-[12px] font-bold rounded hover:bg-[#1a8cd3] shadow-md transition-all"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
