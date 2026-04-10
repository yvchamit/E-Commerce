import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cart } = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  return (
    <div className="absolute right-0 top-full w-80 bg-white shadow-2xl border border-gray-100 rounded-lg z-100 p-4 hidden group-hover:block transition-all">
      {/* 1. Başlık: Kaç ürün olduğu */}
      <h3 className="font-bold text-[#252B42] mb-4 pb-2 text-base">
        My Cart ({totalItems} {totalItems === 1 ? "Item" : "Items"})
      </h3>

      {/* 2. Ürün Listesi */}
      <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="flex gap-4 py-4 border-b last:border-0">
              {/* Sol: Ürün Görseli */}
              <div className="w-16 h-20 shrink-0">
                <img
                  src={item.product.images?.[0]?.url || item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover rounded shadow-sm"
                />
              </div>

              {/* Sağ: Detaylar */}
              <div className="flex flex-col flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#252B42] truncate">
                  {item.product.name}
                </h4>
                {/* Varsa Açıklama */}
                <p className="text-[11px] text-[#737373] line-clamp-1 mt-1 font-medium">
                  {item.product.description}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-semibold text-[#737373]">
                    Quantity: {item.count}
                  </span>
                  <span className="text-sm font-bold text-[#23A6F0]">
                    ${(item.product.price * item.count).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-sm text-[#737373] font-medium">
              Your cart is currently empty.
            </p>
          </div>
        )}
      </div>

      {/* 3. Butonlar */}
      {cart.length > 0 && (
        <div className="flex flex-col gap-2 mt-4 pt-2 border-t border-gray-100">
          <Link
            to="/shopping-cart"
            className="w-full py-2.5 text-center bg-[#23A6F0] text-white text-sm font-bold rounded hover:bg-[#1a8cd3] transition-all"
          >
            GO TO CART
          </Link>
          <Link
            to="/checkout"
            className="w-full py-2.5 text-center border-2 border-[#23A6F0] text-[#23A6F0] text-sm font-bold rounded hover:bg-[#23A6F0] hover:text-white transition-all block"
          >
            CHECKOUT
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
