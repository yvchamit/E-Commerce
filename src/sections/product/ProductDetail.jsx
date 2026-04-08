import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";

const ProductDetail = () => {
  const [activeImg, setActiveImg] = useState(0);

  const images = ["/image/detail1.jpg", "/image/detail2.jpg"];

  return (
    <div className="bg-[#FAFAFA] px-8 pb-8 font-sans text-[#252B42]">
      <div className="max-w-section mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative group mb-4 h-112.5 overflow-hidden">
            <img
              src={images[activeImg]}
              className="w-full h-full object-cover"
              alt="Product"
            />

            {/* Navigasyon Okları */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform">
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform">
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </div>

          {/* Thumbnail Listesi */}
          <div className="flex gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImg(index)}
                className={`w-24 h-24 cursor-pointer transition-all ${
                  activeImg === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="thumb"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ TARAF: DETAYLAR */}
        <div className="w-full md:w-1/2 space-y-5 py-2">
          <h1 className="text-xl font-normal tracking-tight">Floating Phone</h1>

          {/* Rating Bölümü */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} fill="#F3CD03" stroke="none" />
              ))}
              <Star size={18} stroke="#F3CD03" fill="none" />
            </div>
            <span className="text-[#737373] text-sm font-bold">10 Reviews</span>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-bold">$1,139.33</p>
            <p className="text-sm font-bold">
              <span className="text-[#737373]">Availability :</span>
              <span className="text-[#23A6F0] ml-2">In Stock</span>
            </p>
          </div>

          <p className="text-[#858585] text-sm leading-relaxed max-w-sm font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <hr className="border-[#ECECEC] w-full my-6" />

          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-[#23A6F0] border-2 border-transparent focus:border-gray-400"></button>
            <button className="w-8 h-8 rounded-full bg-[#2DC071] border-2 border-transparent focus:border-gray-400"></button>
            <button className="w-8 h-8 rounded-full bg-[#E77C40] border-2 border-transparent focus:border-gray-400"></button>
            <button className="w-8 h-8 rounded-full bg-[#252B42] border-2 border-transparent focus:border-gray-400"></button>
          </div>

          {/* Aksiyon Butonları */}
          <div className="flex items-center gap-3 pt-8">
            <button className="bg-[#23A6F0] text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-[#1a8cd3] transition-colors shadow-sm">
              Select Options
            </button>

            <div className="flex gap-2">
              <button className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <Heart size={18} />
              </button>
              <button className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <ShoppingCart size={18} />
              </button>
              <button className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <Eye size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
