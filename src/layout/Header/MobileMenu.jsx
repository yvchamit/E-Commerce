import { FaUser, FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { cn } from "../../lib/mergeClass";

export default function MobileMenu({ isOpen, type }) {
  if (!isOpen) return null;

  const p = type.toLowerCase();
  const isEcomFull = ["shop", "product"].includes(p);
  const isHome = p === "home";

  // Link Senaryoları
  const links = isEcomFull
    ? ["Home", "Shop", "About", "Blog", "Contact", "Pages"]
    : ["Home", "Product", "Pricing", "Contact"];

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
            key={link}
            className={cn(
              "text-3xl",
              isEcomFull && link === "Home"
                ? "text-[#252B42] font-bold"
                : isEcomFull && link === "Contact"
                  ? "text-[#737373] font-bold"
                  : "text-[#737373] font-semibold",
            )}
          >
            {link}
          </li>
        ))}

        {/* Senaryo 1-b: Product ve Shop'ta her şey menüye gelir */}
        {isEcomFull && (
          <div className="flex flex-col items-center gap-8 mt-2 text-[#23A6F0]">
            {/* Login / Register Satırı */}
            <div className="flex items-center gap-3 font-bold cursor-pointer text-2xl">
              <FaUser size={24} />
              <span>Login / Register</span>
            </div>

            {/* İkon Grubu */}
            <div className="flex flex-col gap-10 items-center">
              <IoMdSearch size={42} />
              <div className="flex items-center gap-1">
                <RiShoppingCart2Line size={36} />
                <span className="text-sm">1</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegHeart size={32} />
                <span className="text-sm">1</span>
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
