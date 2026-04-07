import React from "react";
import { ChevronRight } from "lucide-react";

const ProductTabs = () => {
  return (
    <div className="bg-white border-t border-[#ECECEC]">
      <div className="flex justify-center gap-4 md:gap-8 py-6 text-sm font-bold text-[#737373]">
        <button className="hover:text-[#252B42] transition-colors underline decoration-2 underline-offset-8">
          Description
        </button>
        <button className="hover:text-[#252B42] transition-colors">
          Additional Information
        </button>
        <button className="hover:text-[#252B42] transition-colors">
          Reviews <span className="text-[#23856D]">(0)</span>
        </button>
      </div>

      <hr className="border-[#ECECEC] mb-12 max-w-section mx-auto invisible md:visible" />

      <div className="max-w-section mx-auto pb-8 flex flex-col md:flex-row gap-7 px-8 md:px-0">
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
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[30%] space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#252B42]">
              the quick fox jumps over
            </h3>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-bold text-[#737373]"
                >
                  <ChevronRight size={16} className="text-[#737373]" />
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#252B42]">
              the quick fox jumps over
            </h3>
            <ul className="space-y-3">
              {[1, 2, 3].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-bold text-[#737373]"
                >
                  <ChevronRight size={16} className="text-[#737373]" />
                  the quick fox jumps over the lazy dog
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
