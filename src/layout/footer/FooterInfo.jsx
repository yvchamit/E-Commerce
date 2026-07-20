function FooterInfo() {
  return (
    <div className="py-14">
      <div className="max-w-section mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-8 md:px-0 gap-8 whitespace-nowrap">
        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42] text-base">Company Info</h5>
          <ul className="text-[#737373] font-bold text-sm space-y-3">
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              About Us
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Carrier
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              We are hiring
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Blog
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42] text-base">Legal</h5>
          <ul className="text-[#737373] font-bold text-sm space-y-3">
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              About Us
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Carrier
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              We are hiring
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Blog
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42] text-base">Features</h5>
          <ul className="text-[#737373] font-bold text-sm space-y-3">
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Business Marketing
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              User Analytic
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Live Chat
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Unlimited Support
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42] text-base">Resources</h5>
          <ul className="text-[#737373] font-bold text-sm space-y-3">
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              IOS & Android
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Watch a Demo
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              Customers
            </li>
            <li className="hover:text-[#23A6F0] cursor-pointer transition-colors">
              API
            </li>
          </ul>
        </div>

        <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-2">
          <h5 className="font-bold text-[#252B42] text-base">Get In Touch</h5>
          <div className="flex flex-col gap-2">
            <div className="flex h-14">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-md px-4 py-3 text-sm focus:outline-[#23A6F0] w-full"
              />
              <button className="bg-[#23A6F0] text-white px-4 py-3 rounded-r-md text-sm hover:bg-[#1a85c5] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[#737373] text-xs mt-2 font-medium">
              Lore impsum dolor Amit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
