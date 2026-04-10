import { useState } from "react";
import { Link } from "react-router-dom";
import { navConfig } from "../../lib/navConfig";
import Dropdown from "../../components/Dropdown";
import { FaUser, FaRegHeart, FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { cn } from "../../lib/mergeClass";
import MobileMenu from "./MobileMenu";
import BtnContact from "../../components/BtnContact";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logoutUser } from "../../store/actions/clientActions";
import CartDropdown from "../../components/CartDropdown";
import WishlistDropdown from "../../components/WishlistDropdown";



export default function Navbar({ page, variant, maxWidth, showIcon, isGray }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.client.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCorporate = variant === "auth";

  const gravatarUrl = user?.email
    ? `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase().trim())}?s=32&d=identicon`
    : null;

  const activeLinks = isCorporate ? navConfig.auth : navConfig.home;

  const categories = useSelector((state) => state.product.categories);

  const womenCategories = categories.filter(
    (c) => c.gender.toLowerCase() === "k",
  );
  const menCategories = categories.filter(
    (c) => c.gender.toLowerCase() === "e",
  );

  const cart = useSelector((state) => state.cart.cart);

  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  const wishlist = useSelector((state) => state.product.wishlist);
  const wishlistCount = wishlist.length;

  return (
    <nav
      className={cn(
        "w-full sticky top-0 z-50 bg-white transition-colors duration-300",
        isGray && "md:bg-white",
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
        {/* Logo ve Dinamik Linkler */}
        <div className="flex items-center gap-12 lg:gap-20">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Linkler */}
          <ul className="hidden md:flex items-center gap-5 text-[#737373] font-bold text-sm">
            {activeLinks.map((link, index) => (
              <li key={index}>
                {/* 1. SHOP DROPDOWN (Mevcut yapın) */}
                {link.title === "Shop" ? (
                  <Dropdown title="Shop">
                    <div className="flex p-8 gap-16 bg-white min-w-85">
                      {/* KADIN SÜTUNU */}
                      <div className="flex flex-col">
                        <h3 className="font-bold text-[#252B42] text-lg mb-4">
                          Kadın
                        </h3>
                        <div className="flex flex-col gap-3">
                          {womenCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/shop/kadin/${cat.code.split(":")[1]}/${cat.id}`}
                              className="text-sm font-medium text-[#737373] hover:text-[#23A6F0] transition-colors whitespace-nowrap"
                            >
                              {cat.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* ERKEK SÜTUNU */}
                      <div className="flex flex-col">
                        <h3 className="font-bold text-[#252B42] text-lg mb-4">
                          Erkek
                        </h3>
                        <div className="flex flex-col gap-3">
                          {menCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/shop/erkek/${cat.code.split(":")[1]}/${cat.id}`}
                              className="text-sm font-medium text-[#737373] hover:text-[#23A6F0] transition-colors whitespace-nowrap"
                            >
                              {cat.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Dropdown>
                ) : link.title === "Pages" ? (
                  <Dropdown title="Pages">
                    <div className="w-44 bg-white rounded-md overflow-hidden shadow-lg">
                      <Link
                        to="/about"
                        className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
                      >
                        Contact
                      </Link>
                      <Link
                        to="/team"
                        className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
                      >
                        Team
                      </Link>
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

        {/* SAĞ: AKSİYONLAR */}

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-[#23A6F0]">
            {/* KULLANICI GİRİŞ YAPMIŞ MI KONTROLÜ */}
            {user && user.name ? (
              <Dropdown
                title={
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#23A6F0] flex items-center justify-center text-white text-xs font-bold overflow-hidden border border-[#23A6F0]">
                      {gravatarUrl ? (
                        <img
                          src={gravatarUrl}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        user.name.charAt(0).toUpperCase()
                      )}
                    </div>
                    <span className="max-w-25 truncate">{user.name}</span>
                  </div>
                }
              >
                <div className="w-44 bg-white rounded-md overflow-hidden">
                  {/* <Link
                    to="/orders"
                    className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
                  >
                    Settings
                  </Link>

                  <hr className="border-[#ECECEC]" /> */}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-6 py-3 text-sm text-red-500 font-bold hover:bg-red-50 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </Dropdown>
            ) : isCorporate ? (
              <>
                <Link to="/login" className="font-bold text-sm">
                  Login
                </Link>
                <BtnContact showIcon={showIcon}>Become a member</BtnContact>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 font-bold text-sm hover:text-[#1a8cd8] transition-colors"
              >
                <FaUser size={16} />
                <span className="hidden md:inline text-sm">
                  Login / Register
                </span>
              </Link>
            )}

            {/* SEPET VE HEART İKONLARI (Sadece E-Ticaret modda) */}
            {!isCorporate && (
              <div className="flex gap-2 items-center">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer">
                  <IoMdSearch size={22} />
                </button>

                {/* SEPET BÖLÜMÜ */}
                <div className="relative group flex items-center gap-1 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all">
                  <RiShoppingCart2Line size={22} className="text-[#23A6F0]" />
                  <span className="text-[12px] font-bold text-[#23A6F0]">
                    {totalItems}
                  </span>
                  <CartDropdown />
                </div>

                {/* FAVORİ (HEART) BÖLÜMÜ - GÜNCELLENEN KISIM */}
                <div className="relative group flex items-center gap-1 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-all">
                  <FaRegHeart
                    size={20}
                    className={"text-[#23A6F0] fill-[#23A6F0]"}
                  />
                  <span
                    className={`text-[12px] font-bold text-[#23A6F0]`}
                  >
                    {wishlist.length}
                  </span>

                  {/* HOVER DURUMUNDA AÇILACAK MENÜ */}
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <WishlistDropdown />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MOBİL VE HAMBURGER*/}
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

      <MobileMenu isOpen={isMenuOpen} type={page} setIsOpen={setIsMenuOpen} />
    </nav>
  );
}
