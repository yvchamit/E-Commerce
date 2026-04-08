import SignUpForm from "../components/auth/SignUpForm";
import SignUpFooterInfo from "../sections/singUp/SignUpFooterInfo";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF]">
      <header className="w-full bg-white border-b border-[#ECECEC]">
        <div className="max-w-section mx-auto px-8 md:px-0 py-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-[#252B42] cursor-pointer">
            Bandage
          </Link>
          <div className="flex items-center gap-2 group cursor-pointer text-[#737373] hover:text-[#23A6F0] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <Link to="/" className="text-sm font-bold">
              Return to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="grow flex items-center justify-center py-10 md:py-20 px-4">
        <div className="w-full max-w-150">
          <SignUpForm />
        </div>
      </main>
      <SignUpFooterInfo />
    </div>
  );
};

export default SignUpPage;
