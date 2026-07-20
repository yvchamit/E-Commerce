import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import BtnContact from "../../components/ui/BtnContact";

export default function AuthLinks({ isCorporate, showIcon }) {
  if (isCorporate) {
    return (
      <>
        <Link
          to="/login"
          className="font-bold text-sm hover:text-[#23A6F0] transition-colors"
        >
          Login
        </Link>
        <Link to="/signup">
          <BtnContact showIcon={showIcon}>Become a member</BtnContact>
        </Link>
      </>
    );
  }

  return (
    <Link
      to="/login"
      className="flex items-center gap-2 font-bold text-sm hover:text-[#1a8cd8] transition-colors"
    >
      <FaUser size={16} />
      <span className="hidden md:inline text-sm">Login / Register</span>
    </Link>
  );
}