import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterTop({ isGray = false }) {
  const bgClass = isGray ? "footer-top-gray" : "footer-top-white";

  return (
    <div className={`footer-top ${bgClass}`}>
      <div className="footer-top-content">
        <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>

        <div className="flex gap-5 text-[#23A6F0]">
          <SocialIcon href="#" Icon={FaFacebook} />
          <SocialIcon href="#" Icon={FaInstagram} />
          <SocialIcon href="#" Icon={FaTwitter} />
        </div>
      </div>
    </div>
  );
}

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#1a85c5] transition-all transform hover:scale-110 active:scale-95"
  >
    <Icon size={24} />
  </a>
);

export default FooterTop;
