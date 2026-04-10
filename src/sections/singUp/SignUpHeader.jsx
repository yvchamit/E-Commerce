import { Link, useHistory } from "react-router-dom";

const SignUpHeader = () => {
  const history = useHistory();

  const handleBackClick = () => {

    if (window.history.length > 1) {
      history.goBack();
    } else {
      history.push("/shop");
    }
  };

  return (
    <>
      <header className="w-full bg-white border-b border-[#ECECEC]">
        <div className="max-w-page mx-auto px-8 py-6 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold text-[#252B42] cursor-pointer"
          >
            Bandage
          </Link>

          <div
            onClick={handleBackClick}
            className="flex items-center gap-2 group cursor-pointer text-[#737373] hover:text-[#23A6F0] transition-colors"
          >
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

            <span className="text-sm font-bold">Previous Page</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default SignUpHeader;
