import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import Dropdown from "../../components/Dropdown";
import { logoutUser } from "../../store/actions/clientActions";

export default function UserMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.client.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  const gravatarUrl = user?.email
    ? `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase().trim())}?s=32&d=identicon`
    : null;

  return (
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
        <Link
          to="/previous-orders"
          className="block px-6 py-3 text-sm text-[#737373] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors font-bold"
        >
          Previous Orders
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-6 py-3 text-sm text-red-500 font-bold hover:bg-red-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </Dropdown>
  );
}