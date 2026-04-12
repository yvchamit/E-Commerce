import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUserAction } from "../../store/actions/clientActions";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    if (name === "rememberMe") {
      setRememberMe(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(loginUserAction(formData, rememberMe));

      history.push(from);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#252B42]">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          className="p-3 bg-[#F9F9F9] border border-[#ECECEC] rounded-md focus:outline-[#23A6F0]"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#252B42]">Password</label>
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          className="p-3 bg-[#F9F9F9] border border-[#ECECEC] rounded-md focus:outline-[#23A6F0]"
          placeholder="********"
        />
      </div>

      <div className="flex items-center gap-2 pl-2">
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          onChange={handleChange}
          className="w-4 h-4 text-[#23A6F0]"
        />
        <label htmlFor="rememberMe" className="text-sm text-[#737373]">
          Remember Me
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-[#23A6F0] text-white py-4 rounded-md font-bold hover:bg-[#1a8cd8] transition-all disabled:bg-gray-400"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
