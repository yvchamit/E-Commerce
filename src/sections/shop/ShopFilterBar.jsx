import { LayoutGrid, List, ChevronDown, Search } from "lucide-react";
import { HiViewGrid } from "react-icons/hi";
import { cn } from "../../lib/mergeClass";

const ShopFilterBar = ({
  view,
  setView,
  actualTotal,
  onSortChange,
  onFilterChange,
  filterText,
  sortOption,
  currentPage,
  limit = 12,
}) => {
  const firstResult = actualTotal === 0 ? 0 : (currentPage - 1) * limit + 1;
  const lastResult = Math.min(currentPage * limit, actualTotal);

  return (
    <div className="bg-white py-6 px-8 md:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[#737373] font-bold text-sm">
          {`Showing ${firstResult} – ${lastResult} of ${actualTotal} results`}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#737373] font-bold text-sm">Views:</span>
          <div className="flex gap-2">
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

            <button
              onClick={() => setView("list")}
              className={cn(
                "p-2 border rounded-md transition-colors flex items-center justify-center",
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

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              value={filterText}
              onChange={(e) => onFilterChange(e.target.value)}
              placeholder="Search products..."
              className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm rounded-md py-3 pl-10 pr-4 w-full sm:w-48 focus:outline-none focus:border-[#23A6F0] transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm rounded-md py-3 pl-4 pr-10 w-full sm:w-fit min-w-40 cursor-pointer focus:outline-none transition-colors hover:border-[#BDBDBD]"
            >
              <option value="">Sort By</option>
              <option value="rating:desc">Rating: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373] pointer-events-none" />
          </div>

          {/* <button className="bg-[#23A6F0] text-white font-bold text-sm py-3 px-8 rounded-md hover:bg-[#1a85c2] transition-colors w-full sm:w-auto">
            Filter
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ShopFilterBar;
