import { cn } from "../lib/mergeClass.js";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const showMax = 3;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > showMax + 2) pages.push("...");

      const start = Math.max(2, currentPage - showMax);
      const end = Math.min(totalPages - 1, currentPage + showMax);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - (showMax + 1)) pages.push("...");

      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex justify-center items-center my-12 font-montserrat">
      <div className="flex border border-[#BDBDBD] rounded-lg overflow-hidden shadow-sm bg-white">
        {/* FIRST */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={cn(
            "px-4 py-4 sm:px-6 font-bold text-sm border-r border-[#BDBDBD] transition-all",
            currentPage === 1
              ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white",
          )}
        >
          First
        </button>

        {/* NUMARALAR */}
        <div className="hidden sm:flex">
          {pages.map((page, index) => (
            <button
              key={index}
              disabled={page === "..."}
              onClick={() => page !== "..." && onPageChange(page)}
              className={cn(
                "px-5 py-4 font-bold text-sm border-r border-[#BDBDBD] transition-all",
                currentPage === page
                  ? "bg-[#23A6F0] text-white"
                  : "bg-white text-[#23A6F0]",
                page === "..." ? "cursor-default" : "hover:bg-[#F9F9F9]",
              )}
            >
              {page}
            </button>
          ))}
        </div>

        {/* MOBİL */}
        <div className="flex sm:hidden px-6 py-4 font-bold text-[#23A6F0] border-r border-[#BDBDBD]">
          {currentPage} / {totalPages}
        </div>

        {/* NEXT */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            "px-4 py-4 sm:px-6 font-bold text-sm transition-all",
            currentPage === totalPages
              ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white",
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
