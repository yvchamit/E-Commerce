import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "instagram",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    name: "facebook",
    url: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    name: "twitter",
    url: "https://twitter.com",
    icon: FaTwitter,
  },
];

const SocialFaIcons = () => {
  return (
    <div className="flex justify-center gap-6 text-[#737373]">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className="hover:text-[#23A6F0] transition-all transform hover:scale-115 py-4 md:py-8"
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialFaIcons;
