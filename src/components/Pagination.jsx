import { cn } from "../lib/mergeClass";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Sayfa numaralarını içeren bir dizi oluşturuyoruz: [1, 2, 3]
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex border border-[#BDBDBD] rounded-lg overflow-hidden shadow-sm">
        {/* FIRST BUTONU */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={cn(
            "px-6 py-6 font-bold text-sm border-r border-[#BDBDBD] transition-all",
            currentPage === 1
              ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
              : "bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white",
          )}
        >
          First
        </button>

        {/* DINAMIK SAYFA NUMARALARI */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "px-6 py-6 font-bold text-sm border-r border-[#BDBDBD] transition-all",
              currentPage === page
                ? "bg-[#23A6F0] text-white" // Aktif sayfa stili
                : "bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white",
            )}
          >
            {page}
          </button>
        ))}

        {/* NEXT BUTONU */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            "px-6 py-6 font-bold text-sm transition-all",
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
