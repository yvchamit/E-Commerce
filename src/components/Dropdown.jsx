import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown({ title, links, children }) {
  return (
    <div className="relative group cursor-pointer flex items-center gap-1 py-2">
      <span className="navbar-links-hover flex items-center gap-1 transition-colors">
        {title}
        <FaChevronDown
          size={10}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </span>

      <div
        className="absolute top-full -left-5 mt-2 bg-white rounded-md shadow-xl border border-[#ECECEC]
                   opacity-0 invisible translate-y-2 
                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                   transition-all duration-300 z-100"
      >
        {/* ÖNEMLİ DEĞİŞİKLİK BURADA: */}
        {children ? (
          <div className="p-0">{children}</div>
        ) : (
          <ul className="py-2 text-left w-48">
            {links &&
              links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="block px-6 py-3 text-sm font-medium text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
