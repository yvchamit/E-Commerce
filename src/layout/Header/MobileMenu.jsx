import { FaUser, FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { cn } from "../../lib/mergeClass";
import { Link } from "react-router-dom";
import { useCartSummary } from "../../hooks/useCartSummary";
import { useSelector } from "react-redux";
import { getMobileLinks } from "../../lib/navConfig";

export default function MobileMenu({ isOpen, type, setIsOpen }) {
  const { totalItems, wishlistCount } = useCartSummary();
  const user = useSelector((state) => state.client.user);

  if (!isOpen) return null;
  const p = type.toLowerCase();
  const isHome = p === "home";
  const isEcomFull = !isHome && ["shop", "product"].includes(p);

  const links = getMobileLinks(isEcomFull ? "home" : "auth");

  return (
    <div
      className={cn(
        "md:hidden w-full py-12",
        isHome ? "bg-white" : "bg-[#F6F6F6]",
      )}
    >
      <ul className="flex flex-col gap-8 items-center">
        {links.map((link) => (
          <li
            key={link.title}
            className={cn(
              "text-3xl",
              isEcomFull && link.title === "Home"
                ? "text-[#252B42] font-bold"
                : isEcomFull && link.title === "Contact"
                  ? "text-[#737373] font-bold"
                  : "text-[#737373] font-semibold",
            )}
          >
            <Link to={link.path} onClick={() => setIsOpen(false)}>
              {link.title}
            </Link>
          </li>
        ))}

        {isEcomFull && (
          <div className="flex flex-col items-center gap-8 mt-2 text-[#23A6F0]">
            {user?.name ? (
              <Link
                to="/previous-orders"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 font-bold cursor-pointer text-2xl"
              >
                <FaUser size={24} />
                <span>{user.name}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 font-bold cursor-pointer
            text-2xl"
              >
                <FaUser size={24} />
                <span>Login / Register</span>
              </Link>
            )}
            <div className="flex flex-col gap-10 items-center">
              <button onClick={() => setIsOpen(false)}>
                <IoMdSearch size={42} />
              </button>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1"
              >
                <RiShoppingCart2Line size={36} />
                <span className="text-sm">{totalItems}</span>
              </Link>
              <Link
                to="/wishlist"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1"
              >
                <FaRegHeart size={32} />
                <span className="text-sm">{wishlistCount}</span>
              </Link>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
