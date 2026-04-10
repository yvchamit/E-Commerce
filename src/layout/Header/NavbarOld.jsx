import { useState } from "react";
import { FaChevronDown, FaRegHeart, FaUser, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { cn } from "../../lib/mergeClass";
import BtnContact from "../../components/BtnContact";
import MobileMenu from "../Header/MobileMenu";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";

export default function Navbar({ page, variant, maxWidth, isGray, showIcon }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCorporate = variant === "auth";

  // Sayfa Linkleri Verisi
  const navLinks = isCorporate
    ? [
        { title: "Home", path: "/" },
        { title: "Product", path: "/product-detail" },
        { title: "Pricing", path: "/pricing" },
        { title: "Contact", path: "/contact" },
      ]
    : [
        { title: "Home", path: "/" },
        {
          title: "Shop",
          path: "/shop",
          dropdown: [
            { title: "Men", path: "/shop/men" },
            { title: "Women", path: "/shop/women" },
          ],
        },
        { title: "About", path: "/about" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/contact" },
        {
          title: "Pages",
          path: "/pages",
          dropdown: [
            { title: "Team", path: "/team" },
            { title: "Pricing", path: "/pricing" },
          ],
        },
      ];

  return (
    <nav
      className={cn(
        "w-full sticky top-0 z-50 bg-white",
        isGray && "md:bg-white",
      )}
    >
      <div
        className={cn(
          "mx-auto py-6 flex justify-between items-center",
          maxWidth,
          isCorporate ? "px-8 md:px-0" : "px-8",
        )}
      >
        {/* SOL: LOGO & LİNKLER */}
        <div className="flex items-center gap-12 lg:gap-20">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>
          <ul className="hidden md:flex gap-5 text-[#737373] font-bold text-sm items-center">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                {link.dropdown ? (
                  <Dropdown title={link.title} links={link.dropdown} />
                ) : (
                  <Link to={link.path} className="navbar-links-hover">
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* SAĞ: AKSİYONLAR */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8 text-[#23A6F0]">
            {isCorporate ? (
              <div className="flex items-center gap-8">
                <button className="font-bold text-sm">Login</button>
                <BtnContact showIcon={showIcon}>Become a member</BtnContact>
              </div>
            ) : (
              <DesktopActions />
            )}
          </div>

          
          <MobileActions
            isCorporate={isCorporate}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} type={page} />
    </nav>
  );
}


function DesktopActions() {
  return (
    <div className="flex items-center gap-6">
      <Link
        to="/login"
        className="flex items-center gap-2 font-bold text-sm hover:text-[#1a8cd8] transition-colors"
      >
        <FaUser size={16} />{" "}
        <span className="hidden lg:inline">Login / Register</span>
      </Link>
      <div className="flex gap-4 items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <IoMdSearch size={22} />
        </button>
        <div className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <RiShoppingCart2Line size={22} /> <span className="text-xs">1</span>
        </div>
        <div className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <FaRegHeart size={20} /> <span className="text-xs">1</span>
        </div>
      </div>
    </div>
  );
}
