import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const OfficeCard = ({ icon: Icon, title, subTitle1, subTitle2, isDark = false }) => {
  return (
    <div className={`flex flex-col items-center gap-4 p-10 transition-all duration-300 hover:scale-105 ${
      isDark ? "bg-[#252B42] text-white py-16" : "bg-white text-[#252B42]"
    }`}>
      <Icon size={72} className="text-[#23A6F0] mb-2" />
      
      <div className="flex flex-col items-center font-bold text-sm leading-6">
        <span>{subTitle1}</span>
        <span>{subTitle2}</span>
      </div>

      <h5 className="font-bold text-base mt-2">{title}</h5>

      <button className={`mt-4 px-8 py-4 rounded-full border border-[#23A6F0] text-[#23A6F0] font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-colors`}>
        Submit Request
      </button>
    </div>
  );
};

export default function VisitOffice() {
  return (
    <section className="bg-[#FAFAFA] py-20 px-8">
      <div className="max-w-section mx-auto">
        
        {/* ÜST BAŞLIK ALANI */}
        <div className="text-center mb-20 flex flex-col gap-4">
          <h6 className="font-bold text-sm text-[#252B42] tracking-wider uppercase">
            VISIT OUR OFFICE
          </h6>
          <h2 className="text-4xl md:text-[40px] font-bold text-[#252B42] leading-tight">
            We help small businesses <br className="hidden md:block" /> with big ideas
          </h2>
        </div>

        {/* KARTLAR - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          
          <OfficeCard 
            icon={FaPhoneAlt}
            subTitle1="georgia.young@example.com"
            subTitle2="georgia.young@ple.com"
            title="Get Support"
          />

          <OfficeCard 
            icon={FaMapMarkerAlt}
            subTitle1="georgia.young@example.com"
            subTitle2="georgia.young@ple.com"
            title="Get Support"
            isDark={true}
          />

          <OfficeCard 
            icon={FaEnvelope}
            subTitle1="georgia.young@example.com"
            subTitle2="georgia.young@ple.com"
            title="Get Support"
          />

        </div>
      </div>
    </section>
  );
}