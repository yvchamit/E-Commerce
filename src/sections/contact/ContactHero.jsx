import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import { cn } from "../../lib/mergeClass";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-bold text-[#252B42]">Phone : +451 215 215</p>
      <p className="text-2xl font-bold text-[#252B42]">Fax : +451 215 215</p>
      <div className="flex gap-8 mt-4 text-[#252B42]">
        <FaTwitter
          size={30}
          className="hover:text-[#23A6F0] cursor-pointer transition-transform hover:scale-110"
        />
        <FaFacebookSquare
          size={30}
          className="hover:text-[#23A6F0] cursor-pointer transition-transform hover:scale-110"
        />
        <FaInstagram
          size={30}
          className="hover:text-[#23A6F0] cursor-pointer transition-transform hover:scale-110"
        />
        <FaLinkedin
          size={30}
          className="hover:text-[#23A6F0] cursor-pointer transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
};

const ContactHero = ({ page = "contact" }) => {
  const isAbout = page === "about";

  return (
    <section className="w-full overflow-y-visible bg-white">
      <div className="max-w-section mx-auto px-8 md:px-0 flex flex-col md:flex-row items-center justify-between min-h-150 md:min-h-175">
        <div className="flex-1.5 flex flex-col gap-10 py-12 md:py-0 text-center md:text-left items-center md:items-start z-20">
          <h5 className="font-bold text-[#252B42] text-sm tracking-widest uppercase">
            {isAbout ? "ABOUT COMPANY" : "CONTACT US"}
          </h5>

          <h1 className="text-4xl md:text-[58px] font-bold text-[#252B42] leading-[1.1] tracking-tight px-8 md:px-0">
            {isAbout ? (
              <>ABOUT US</>
            ) : (
              <>
                Get in touch <br className="hidden md:block" /> today!
              </>
            )}
          </h1>

          <p className="text-[#737373] text-lg md:text-xl max-w-60 md:max-w-90 leading-relaxed font-semibold">
            We know how large objects will act, but things on a small scale.
          </p>

          {isAbout ? (
            <div className="flex justify-center md:justify-start">
              <Link
                to="/pricing"
                className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-sky-600 transition-all"
              >
                Get Quote Now
              </Link>
            </div>
          ) : (
            <ContactInfo />
          )}
        </div>

        <div className="relative w-full md:w-170 h-full md:h-170 md:overflow-y-visible my-24 md:my-16 flex items-end justify-end">
          <div className="absolute w-[85%] aspect-square bg-[#FFE9EA] rounded-full -top-15 right-5 md:-top-10 md:-right-30" />
          <img
            src={
              isAbout ? "/image/contactHero2.png" : "/image/contactHero1.png"
            }
            className="scale-[1.75] origin-[50%_60%] md:origin-[15%_90%]"
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
