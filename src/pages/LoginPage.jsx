import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
      {/* Logo ve Sosyal Medya Kısmı */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#252B42] tracking-tight mb-4">
          Bandage
        </h1>

        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center gap-6 text-[#737373]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#23A6F0] transition-all transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#23A6F0] transition-all transform hover:scale-110"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#23A6F0] transition-all transform hover:scale-110"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Form Kartı */}
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-[#ECECEC]">
        <div className="text-center mb-10">
          <p className="text-[#252B42] font-bold text-xl">Welcome Back!</p>
          <p className="text-[#737373] text-sm mt-2">
            Please enter your information to log in.
          </p>
        </div>

        <LoginForm />

        <div className="mt-10 pt-6 border-t border-[#F3F3F3] text-center">
          <p className="text-sm text-[#737373] font-medium">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[#23A6F0] font-bold hover:underline ml-1"
            >
              <br className="md:hidden inline-block"/>Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
