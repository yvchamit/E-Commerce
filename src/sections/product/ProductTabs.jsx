import { useState } from "react";
import { ChevronRight } from "lucide-react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: "Reviews", count: 0 },
  ];

  return (
    <div className="bg-white border-t border-[#ECECEC]">
      <div className="flex justify-center gap-4 md:gap-8 py-6 text-sm font-bold text-[#737373]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`transition-colors relative pb-1 ${
              activeTab === tab.id
                ? "text-[#252B42] underline decoration-2 underline-offset-8"
                : "hover:text-[#252B42]"
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="text-[#23856D] ml-1">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      <hr className="border-[#ECECEC] mb-12 max-w-section mx-auto invisible md:visible" />

      <div className="max-w-section mx-auto pb-8 px-8 md:px-0">
        {activeTab === "description" && (
          <div className="flex flex-col md:flex-row gap-7 animate-fadeIn">
            <div className="w-full md:w-[30%] flex justify-center py-4">
              <div className="w-full max-w-80 rounded-lg overflow-hidden">
                <img
                  src="/image/additional1.jpg"
                  alt="Interior detail"
                  className="w-full aspect-video md:aspect-4/5 object-cover object-center transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>

            <div className="w-full md:w-[35%] space-y-6">
              <h3 className="text-2xl font-bold text-[#252B42]">
                the quick fox jumps over
              </h3>
              <div className="text-[#737373] text-sm leading-relaxed space-y-4">
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                </p>
                <p>Excitation venial consequent sent nostrum met.</p>
              </div>
            </div>

            <div className="w-full md:w-[30%] space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#252B42]">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-bold text-[#737373]"
                    >
                      <ChevronRight size={16} /> the quick fox jumps over the
                      lazy dog
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="py-10 text-center text-[#737373] animate-fadeIn">
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>
            <p>Buraya teknik özellikler veya ek bilgiler gelecek.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="py-10 text-center text-[#737373] animate-fadeIn">
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <p>Henüz değerlendirme yapılmamış. İlk yorumu siz yapın!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
