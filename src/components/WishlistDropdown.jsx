import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/actions/cartActions";
import { toggleWishlist } from "../store/actions/productActions";
import { ShoppingCart, Trash2 } from "lucide-react";

const WishlistDropdown = () => {
  const wishlist = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="absolute right-0 top-full w-80 bg-white shadow-2xl border border-gray-100 rounded-lg z-100 p-4 hidden group-hover:block transition-all">
      <h3 className="font-bold text-[#252B42] mb-4 pb-2 text-base">
        My Wishlist ({wishlist.length}{" "}
        {wishlist.length === 1 ? "Item" : "Items"})
      </h3>

      <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 py-4 border-b last:border-0"
            >
              <Link to={`/product/${item.id}`} className="w-16 h-20 shrink-0">
                <img
                  src={item.images?.[0]?.url || item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded shadow-sm hover:opacity-80 transition-opacity cursor-pointer"
                />
              </Link>

              <div className="flex flex-col flex-1 min-w-0">
                <Link
                  to={`/product/${item.id}`}
                  className="text-sm font-bold text-[#252B42] truncate hover:text-[#23A6F0] transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>

                <p className="text-[11px] text-[#737373] line-clamp-1 mt-1 font-medium">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold text-[#23A6F0]">
                    ${item.price.toFixed(2)}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="text-[#737373] hover:text-[#23A6F0] transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={16} />
                    </button>
                    <button
                      onClick={() => dispatch(toggleWishlist(item))}
                      className="text-[#737373] hover:text-red-500 transition-colors"
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-sm text-[#737373] font-medium">
              Your wishlist is currently empty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistDropdown;
