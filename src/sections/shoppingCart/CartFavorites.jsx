import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { toggleWishlist } from "../../store/actions/productActions";
import { ChevronRight, ShoppingCart, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CartFavorites = () => {
  const wishlist = useSelector((state) => state.product.wishlist);
  const allProducts = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(
    wishlist.length > 0 ? "wishlist" : "recommended",
  );

  const recommendedProducts = allProducts
    .filter((p) => !wishlist.some((w) => w.id === p.id))
    .slice(0, 4);

  return (
    <div className=" bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-16 mb-8">
      {/* TAB BAŞLIKLARI */}
      <div className="flex justify-center gap-4 md:gap-8 py-6 text-sm font-bold text-[#737373]">
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`transition-all underline-offset-8 ${
            activeTab === "wishlist"
              ? "text-[#252B42] underline decoration-2"
              : "hover:text-[#252B42]"
          }`}
        >
          My Wishlist{" "}
          <span className="text-[#23A6F0]">({wishlist.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("recommended")}
          className={`transition-all underline-offset-8 ${
            activeTab === "recommended"
              ? "text-[#252B42] underline decoration-2"
              : "hover:text-[#252B42]"
          }`}
        >
          Recommended for You
        </button>
      </div>

      <hr className="border-[#ECECEC] mb-12 max-w-section mx-auto" />

      <div className="max-w-page mx-auto pb-16 px-8 md:px-16">
        {/* --- 1. TAB: WISHLIST (LİSTE DÜZENİ) --- */}
        {activeTab === "wishlist" && (
          <div className="space-y-4 animate-fadeIn">
            {wishlist.length > 0 ? (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-6 bg-gray-50/50 p-4 rounded-xl border border-transparent hover:border-[#23A6F0]/20 transition-all"
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="w-20 h-24 shrink-0 overflow-hidden rounded-lg shadow-sm"
                  >
                    <img
                      src={product.images?.[0]?.url || product.image}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt=""
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-bold text-[#252B42] hover:text-[#23A6F0] transition-colors"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-[#737373] line-clamp-1 mt-1 font-medium">
                      {product.description}
                    </p>
                    <p className="text-[#23856D] font-bold mt-2">
                      {product.price.toLocaleString()} TL
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="flex items-center gap-2 bg-[#23A6F0] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#1a8cd3] transition-all"
                    >
                      <ShoppingCart size={14} /> Move to Cart
                    </button>
                    <button
                      onClick={() => dispatch(toggleWishlist(product))}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Heart size={20} fill="currentColor" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-[#737373] italic">
                  Your wishlist is empty. Explore our recommendations!
                </p>
                <button
                  onClick={() => setActiveTab("recommended")}
                  className="mt-4 text-[#23A6F0] font-bold text-sm underline"
                >
                  View Recommended Products
                </button>
              </div>
            )}
          </div>
        )}

        {/* --- 2. TAB: RECOMMENDED (GRID DÜZENİ) --- */}
        {activeTab === "recommended" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className="group border border-[#ECECEC] rounded-xl p-4 hover:shadow-lg transition-all relative"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="block aspect-3/4 overflow-hidden rounded-lg mb-4 bg-gray-100"
                >
                  <img
                    src={product.images?.[0]?.url || product.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt=""
                  />
                </Link>

                {/* Wishlist İkonu (Recommendations için) */}
                <button
                  onClick={() => dispatch(toggleWishlist(product))}
                  className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Heart size={16} />
                </button>

                <h4 className="font-bold text-[#252B42] text-sm truncate">
                  {product.name}
                </h4>
                <p className="text-[#23856D] font-bold mt-1">
                  {product.price.toLocaleString()} TL
                </p>

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-white border border-[#23A6F0] text-[#23A6F0] py-2.5 rounded-lg text-xs font-bold hover:bg-[#23A6F0] hover:text-white transition-all"
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartFavorites;
