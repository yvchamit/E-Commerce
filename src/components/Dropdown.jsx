import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

export default function Dropdown({ title, links }) {
  return (
    <div className="relative group cursor-pointer flex items-center gap-1 py-2">
      <span className="navbar-links-hover flex items-center gap-1">
        {title} <FaChevronDown size={10} />
      </span>
      {/* Dropdown Box */}
      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md border border-gray-100 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300 z-100">
        <ul className="py-2 text-left">
          {links.map((link, index) => (
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
      </div>
    </div>
  );
}