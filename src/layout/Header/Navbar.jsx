import { useState } from "react";
import { navConfig } from "../../lib/navConfig";
import Dropdown from "../../components/Dropdown";
import { FaUser, FaRegHeart, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { cn } from "../../lib/mergeClass";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartDropdown from "../../components/CartDropdown";
import WishlistDropdown from "../../components/WishlistDropdown";
import UserMenu from "./UserMenu";
import AuthLinks from "./AuthLinks";
import ShopMegaMenu from "./ShopMegaMenu";
import ActionIcons from "../Header/ActionIcons";




export default function Navbar({ page, variant, maxWidth, showIcon }) {
  const user = useSelector((state) => state.client.user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCorporate = variant === "auth";

  const activeLinks = isCorporate ? navConfig.auth : navConfig.home;

  return (
    <nav
      className={cn(
        "w-full sticky top-0 z-50 bg-white transition-colors",
        isMenuOpen && page !== "home" ? "bg-[#F6F6F6]" : "bg-white",
      )}
    >      
      <div
        className={cn(
          "mx-auto py-6 flex justify-between items-center",
          maxWidth,
          isCorporate ? "px-8 md:px-0" : "px-8",
        )}
      >
        <div className="flex items-center gap-12 lg:gap-20">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          <ul className="hidden md:flex items-center gap-5 text-[#737373] font-bold text-sm">
            {activeLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Shop" ? (
                  <ShopMegaMenu/>
                ) : link.title === "Pages" ? (
                  <Dropdown title="Pages">
                    <div className="w-44 bg-white rounded-md overflow-hidden shadow-lg">
                      {link.dropdown?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </Dropdown>
                ) : (
                  <Link to={link.path} className="navbar-links-hover">
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-[#23A6F0]">
            {user && user.name ? (
              <UserMenu />
            ) : (
              <AuthLinks isCorporate={isCorporate} showIcon={showIcon} />
            )}

            {!isCorporate && <ActionIcons />}
          </div>

          {isCorporate && (
            <div className="flex md:hidden items-center gap-4 text-[#737373]">
              <IoMdSearch size={28} />
              <RiShoppingCart2Line size={24} />
            </div>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#737373]"
          >
            {isMenuOpen ? (
              <FaTimes size={26} />
            ) : (
              <HiMiniBars3BottomRight size={26} />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} type={page} setIsOpen={setIsMenuOpen}/>
    </nav>
  );
}
