// components/auth/LoginForm.js
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        formData,
      );
      console.log("Giriş Başarılı, Token:", res.data.token);

      // TODO: Burası RTK Dispatch noktası olacak!
      localStorage.setItem("token", res.data.token);
      alert("Giriş başarılı!");
    } catch (err) {
      alert("E-posta veya şifre hatalı.");
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
