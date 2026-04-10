import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SocialFaIcons from "../components/SocialFaIcons";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">

      <div className="mb-10 text-center">
        <Link to="/" className="text-5xl font-bold text-[#252B42] tracking-tight mb-4">
          Bandage
        </Link>
        <SocialFaIcons />
      </div>
      
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
            Don't have an account?
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
