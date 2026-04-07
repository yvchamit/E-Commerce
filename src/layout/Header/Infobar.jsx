import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { cn } from "../../lib/mergeClass";

const Infobar = ({ maxWidth, bgColor }) => {
  return (
    <div className={cn("w-full text-white py-3 hidden md:block", bgColor)}>
      <div
        className={cn(
          "mx-auto px-8 flex justify-between items-center",
          maxWidth,
        )}
      >
        {/* İletişim Bilgileri ve Sosyal Medya İkonları Buraya */}
        <div className="flex gap-4 items-center">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <p className="font-bold text-sm">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="flex gap-4 items-center">
          <span className="font-bold">Follow Us:</span>
          <div className="flex gap-4 text-base">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#23A6F0] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#23A6F0] transition-all"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#23A6F0] transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#23A6F0] transition-all"
            >
              <RiTwitterXFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
