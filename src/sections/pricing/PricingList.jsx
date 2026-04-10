import React, { useState } from "react";
import PricingCard from "../../components/PricingCard";

const PricingList = () => {
  const [isYearly, setIsYearly] = useState(false);
  const features = [
    { text: "Unlimited product updates", active: true },
    { text: "Unlimited product updates", active: true },
    { text: "Unlimited product updates", active: true },
    { text: "1GB  Cloud storage", active: false },
    { text: "Email and community support", active: false },
  ];

  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-section mx-auto px-8 md:px-0">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">Pricing</h2>
          <p className="text-[#737373] text-sm mb-12 max-w-112.5 mx-auto font-medium">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics...
          </p>

          <div className="flex items-center justify-center gap-4">
            <span
              className={`font-bold transition-colors ${!isYearly ? "text-[#252B42]" : "text-[#737373]"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-white border border-[#23A6F0] rounded-full p-1 relative flex items-center shadow-inner"
            >
              <div
                className={`w-5 h-5 rounded-full transition-all duration-300 
                ${isYearly ? "translate-x-7 bg-[#23A6F0]" : "bg-[#DEDEDE] border border-[#BDBDBD] translate-x-0"}`}
              />
            </button>
            <span
              className={`font-bold transition-colors ${isYearly ? "text-[#252B42]" : "text-[#737373]"}`}
            >
              Yearly
            </span>

            <span
              className={
                isYearly ? "pricing-save-active" : "pricing-save-passive"
              }
            >
              Save 25%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-8 md:gap-1">
          <div className="flex w-full">
            <PricingCard
              plan="FREE"
              description="Organize across all apps by hand"
              monthlyPrice="0"
              yearlyPrice="0"
              isYearly={isYearly}
              features={features}
            />
          </div>

          <div className="flex w-full">
            <PricingCard
              plan="STANDARD"
              description="Organize across all apps by hand"
              monthlyPrice="9.99"
              yearlyPrice="7.49"
              isYearly={isYearly}
              isFeatured={true}
              features={features}
            />
          </div>

          <div className="flex w-full">
            <PricingCard
              plan="PREMIUM"
              description="Organize across all apps by hand"
              monthlyPrice="19.99"
              yearlyPrice="14.99"
              isYearly={isYearly}
              features={features}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingList;
