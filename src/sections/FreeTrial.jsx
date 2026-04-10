import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import BtnContact from "../components/BtnContact";

const FreeTrial = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-150 mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#252B42] mb-6 leading-tight">
          Start your<br className="block md:hidden" />14 days free trial
        </h2>

        <p className="text-slate-500 text-sm mb-8 max-w-100">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <BtnContact showIcon={false} className="text-sm px-10 py-4 shadow-lg">
          Try it free now
        </BtnContact>

        <div className="flex space-x-8 text-3xl pt-8">
          <a
            href="#"
            className="text-[#55ACEE] hover:opacity-80 transition-opacity"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-[#395185] hover:opacity-80 transition-opacity"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="#"
            className="text-[#000000] hover:opacity-80 transition-opacity"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-[#0A66C2] hover:opacity-80 transition-opacity"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
