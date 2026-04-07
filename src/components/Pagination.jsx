const Pagination = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="flex border border-[#BDBDBD] rounded-lg overflow-hidden shadow-sm">
        <button className="px-6 py-6 bg-[#F3F3F3] text-[#BDBDBD] font-bold text-sm border-r border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white transition-colors">
          First
        </button>

        <button className="px-5 6 bg-white text-[#23A6F0] font-bold text-sm border-r border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white transition-colors">
          1
        </button>
        <button className="px-5 6 bg-[#23A6F0] text-white font-bold text-sm border-r border-[#BDBDBD]">
          2
        </button>
        <button className="px-5 6 bg-white text-[#23A6F0] font-bold text-sm border-r border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white transition-colors">
          3
        </button>

        <button className="px-6 6 bg-white text-[#23A6F0] font-bold text-sm hover:bg-[#23A6F0] hover:text-white transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
