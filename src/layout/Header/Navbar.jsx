import { useState } from "react";
import { Link } from "react-router-dom";
import { navConfig } from '../../lib/navConfig'
import Dropdown from '../../components/Dropdown'; // Dropdown bileşenini ayırdığını varsayıyorum
import { FaChevronDown, FaUser, FaRegHeart, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { cn } from "../../lib/mergeClass";
import MobileMenu from "./MobileMenu";
import BtnContact from "../../components/BtnContact";

export default function Navbar({ page, variant, maxWidth, isGray, showIcon }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCorporate = variant === "auth";

  // Mevcut senaryoya göre linkleri seçiyoruz
  const activeLinks = isCorporate ? navConfig.auth : navConfig.home;

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
        {/* SOL: LOGO & DİNAMİK LİNKLER */}
        <div className="flex items-center gap-12 lg:gap-20">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Manuel Linkler Gitti, Map Geldi! */}
          <ul className="hidden md:flex items-center gap-5 text-[#737373] font-bold text-sm">
            {activeLinks.map((link, index) => (
              <li key={index}>
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
              <>
                <button className="font-bold text-sm">Login</button>
                <BtnContact showIcon={showIcon}>Become a member</BtnContact>
              </>
            ) : (
              <div className="flex items-center gap-6 text-[#23A6F0]">
                <Link
                  to="/login"
                  className="flex items-center gap-2 font-bold text-sm hover:text-[#1a8cd8] transition-colors"
                >
                  <FaUser size={16} />
                  <span className="hidden md:inline text-[14px]">
                    Login / Register
                  </span>
                </Link>
                <div className="flex gap-4 items-center">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer">
                    <IoMdSearch size={22} />
                  </button>
                  <div className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer group">
                    <RiShoppingCart2Line size={22} />
                    <span className="text-[12px] font-normal">1</span>
                  </div>
                  <div className="flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer group">
                    <FaRegHeart size={20} />
                    <span className="text-[12px] font-normal">1</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MOBİL VE HAMBURGER (Mevcut kodunla aynı) */}
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

      <MobileMenu isOpen={isMenuOpen} type={page} />
    </nav>
  );
}
