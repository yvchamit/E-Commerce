import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white">
      {/* Yatay Görsel Kapsayıcı */}
      <div className="w-full aspect-3/2 overflow-hidden mb-6">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Bilgiler */}
      <div className="text-center mb-4">
        <h5 className="text-slate-800 font-bold text-base mb-2">{name}</h5>
        <p className="text-slate-500 font-bold text-sm">{role}</p>
      </div>

      {/* Sosyal Medya İkonları */}
      <div className="flex space-x-5 text-xl">
        <a
          href="#"
          className="text-[#335BF5] md:text-sky-500 hover:opacity-75 transition-colors"
        >
          <FaFacebook size={26} />
        </a>
        <a
          href="#"
          className="text-[#E51F5A] md:text-sky-500 hover:opacity-75 transition-colors"
        >
          <FaInstagram size={26} />
        </a>
        <a
          href="#"
          className="text-[#21A6DF] md:text-sky-500 hover:opacity-75 transition-colors"
        >
          <FaTwitter size={26} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
