import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { HiViewGrid } from "react-icons/hi";

const ShopFilterBar = () => {
  return (
    <div className="bg-white py-6 px-8 md:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[#737373] font-bold text-sm">
          Showing all 12 results
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#737373] font-bold text-sm">Views:</span>
          <div className="flex gap-2">
            <button className="p-2 border border-[#ECECEC] rounded-md hover:bg-[#ECECEC] transition-colors">
              <HiViewGrid className="w-5 h-5 text-[#252B42]" />
            </button>
            <button className="p-3 border border-[#ECECEC] rounded-md hover:bg-[#ECECEC] transition-colors">
              <List className="w-4 h-4 text-[#737373]" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 w-auto">
          {" "}
          {/* w-full yerine w-auto yaptık */}
          <div className="relative w-fit">
            {" "}
            {/* flex-1 yerine w-fit kullanarak genişliği kısıtladık */}
            <select className="appearance-none bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm rounded-md py-3 pl-4 pr-10 w-fit min-w-35 cursor-pointer focus:outline-none transition-colors hover:border-[#BDBDBD]">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            {/* İkonun yerleşimi zaten doğru, pointer-events-none tıklamayı engellemez */}
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373] pointer-events-none" />
          </div>
          <button className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-6 rounded-md hover:bg-[#1a85c2] transition-colors">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterBar;
