import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SignUpFooterInfo() {
  return (
    <>
      <section className="bg-[#2A7CC7] text-white py-16 px-8 md:px-0">
        <div className="max-w-section mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
            <div className="md:col-span-2 flex flex-col gap-5">
              <h3 className="text-2xl font-bold tracking-tight">
                Get In Touch
              </h3>
              <p className="text-sm font-medium leading-6 opacity-90 max-w-md">
                {" "}
                the quick fox jumps over the lazy dog
              </p>
              <div className="flex gap-5">
                <a href="#" className="hover:scale-115 transition-transform">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:scale-115 transition-transform">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:scale-115 transition-transform">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col gap-5">
              <h3 className="text-2xl font-bold tracking-tight">
                Company info
              </h3>
              <ul className="flex flex-col gap-3 text-sm font-bold">
                <li className="cursor-pointer hover:underline">About Us</li>
                <li className="cursor-pointer hover:underline">Carrier</li>
                <li className="cursor-pointer hover:underline">
                  We are hiring
                </li>
                <li className="cursor-pointer hover:underline">Blog</li>
              </ul>
            </div>

            <div className="md:col-span-1 flex flex-col gap-5">
              <h3 className="text-2xl font-bold tracking-tight">Features</h3>
              <ul className="flex flex-col gap-3 text-sm font-bold">
                <li className="cursor-pointer hover:underline">
                  Business Marketing
                </li>
                <li className="cursor-pointer hover:underline">
                  User Analytic
                </li>
                <li className="cursor-pointer hover:underline">Live Chat</li>
                <li className="cursor-pointer hover:underline">
                  Unlimited Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#252B42] py-6 px-8 md:px-37.5">
        <div className="max-w-section mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-[#23A6F0] font-bold text-sm text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
}
