import SignUpForm from "../components/auth/SignUpForm";
import SignUpFooterInfo from "../sections/singUp/SignUpFooterInfo";
import SignUpHeader from "../sections/singUp/SignUpHeader";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF]">
      <SignUpHeader />
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
