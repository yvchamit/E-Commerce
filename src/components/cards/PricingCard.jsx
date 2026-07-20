import { Check } from "lucide-react";

const PricingCard = ({
  plan,
  description,
  monthlyPrice,
  yearlyPrice,
  isYearly,
  features,
  isFeatured = false,
}) => {
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;
  const period = isYearly ? "Year" : "Month";

  return (
    <div
      className={`flex flex-col px-10 py-0 rounded-lg transition-all duration-300 w-full
  ${
    isFeatured
      ? "bg-[#252B42] text-white py-20 z-10 shadow-2xl border border-transparent" // Border-transparent ekledik
      : "bg-white text-[#252B42] py-14 border border-[#23A6F0]"
  }`}
    >
      {/* Başlık */}
      <h3 className="text-2xl font-bold text-center uppercase mb-4">{plan}</h3>

      {/* Açıklama Metni */}
      <p
        className={`text-center font-bold text-sm mb-8 px-4 ${isFeatured ? "text-white" : "text-[#737373]"}`}
      >
        {description}
      </p>

      {/* Fiyat Alanı */}
      <div className="flex justify-center items-center gap-2 mb-8">
        <span className="text-5xl font-bold text-[#23A6F0]">
          {currentPrice}
        </span>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-2xl font-bold text-[#23A6F0]">$</span>
          <span className="text-sm font-bold text-[#8EC2F2]">Per {period}</span>
        </div>
      </div>

      {/* Özellikler Listesi */}
      <ul className="space-y-4 mb-10 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-left">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
              ${feature.active ? "bg-[#2DC071]" : "bg-[#BDBDBD]"}`}
            >
              <Check className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-sm font-bold ${isFeatured ? "text-white" : "text-[#252B42]"}`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Buton (BtnContact Stili) */}
      <button className="w-full bg-[#23A6F0] text-white font-bold py-4 rounded-md hover:bg-sky-600 transition-all">
        Try for free
      </button>
    </div>
  );
};

export default PricingCard;
