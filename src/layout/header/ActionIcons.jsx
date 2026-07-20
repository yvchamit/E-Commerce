import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import CartDropdown from "../../components/CartDropdown";
import WishlistDropdown from "../../components/WishlistDropdown";
import { useCartSummary } from "../../hooks/useCartSummary";

export default function ActionIcons() {
  const { totalItems, wishlistCount } = useCartSummary();

  return (
    <div className="flex gap-2 items-center">
      <button className="p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer">
        <IoMdSearch size={22} />
      </button>

      <div className="relative group flex items-center gap-1 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all">
        <RiShoppingCart2Line size={22} className="text-[#23A6F0]" />
        <span className="text-[12px] font-bold text-[#23A6F0]">{totalItems}</span>
        <CartDropdown />
      </div>

      <div className="relative group flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
        <FaRegHeart size={20} className="text-[#23A6F0] fill-[#23A6F0]" />
        <span className="text-[12px] font-bold text-[#23A6F0]">{wishlistCount}</span>
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
          <WishlistDropdown />
        </div>
      </div>
    </div>
  );
}