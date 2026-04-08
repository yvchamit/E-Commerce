import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { HiViewGrid } from "react-icons/hi";
import { cn } from "../../lib/mergeClass";

const ShopFilterBar = ({ view, setView }) => {
  return (
    <div className="bg-white py-6 px-8 md:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* ... Showing results kısmı ... */}
        <div className="text-[#737373] font-bold text-sm">
          Showing all 12 results
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#737373] font-bold text-sm">Views:</span>
          <div className="flex gap-2">
            {/* GRID BUTONU */}
            <button
              onClick={() => setView("grid")}
              className={cn(
                "p-2 border rounded-md transition-colors",
                view === "grid"
                  ? "bg-[#ECECEC] border-[#23A6F0]"
                  : "border-[#ECECEC]",
              )}
            >
              <HiViewGrid
                className={cn(
                  "w-5 h-5",
                  view === "grid" ? "text-[#23A6F0]" : "text-[#252B42]",
                )}
              />
            </button>

            {/* LIST BUTONU */}
            <button
              onClick={() => setView("list")}
              className={cn(
                "p-2 border rounded-md transition-colors flex items-center justify-center", // p-3'ü p-2 yaparak eşitledim
                view === "list"
                  ? "bg-[#ECECEC] border-[#23A6F0]"
                  : "border-[#ECECEC]",
              )}
            >
              <List
                className={cn(
                  "w-5 h-5",
                  view === "list" ? "text-[#23A6F0]" : "text-[#737373]",
                )}
              />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 w-auto">
          <div className="relative w-fit">
            <select className="appearance-none bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm rounded-md py-3 pl-4 pr-10 w-fit min-w-35 cursor-pointer focus:outline-none transition-colors hover:border-[#BDBDBD]">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
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
