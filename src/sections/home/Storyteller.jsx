function Storyteller() {
  return (
    <section className="bg-white">
      <div className="items-center flex flex-col md:flex-row-reverse md:pl-24 overflow-hidden">
        <div className="md:p-24 w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left px-12 py-24">
          <span className="text-gray-400 font-bold tracking-widest text-sm mb-6 uppercase">
            SUMMER 2020
          </span>

          <h2 className="text-[40px] font-bold text-[#252B42] mb-8 leading-tight">
            Part of the Neural <br className="hidden md:block" /> Universe
          </h2>

          <p className="text-[#737373] text-lg mb-10 leading-relaxed max-w-87 mx-auto md:mx-0 px-8 md:px-0">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Buton Grubu: Mobilde alt alta ve ortalı, masaüstünde yan yana */}
          <div className="flex flex-col items-center sm:flex-row gap-4 w-full sm:w-auto">
            {/* BUY NOW: Mobilde Mavi (#23A6F0), Masaüstünde Yeşil (#2DC071) */}
            <button className="w-fit px-10 py-4 bg-[#23A6F0] md:bg-[#2DC071] text-white font-bold rounded-md hover:opacity-90 transition-all text-sm uppercase whitespace-nowrap">
              BUY NOW
            </button>

            {/* READ MORE: Mobilde Mavi Border, Masaüstünde Yeşil Border */}
            <button className="w-fit px-10 py-4 border border-[#23A6F0] text-[#23A6F0] md:border-[#2DC071] md:text-[#2DC071] font-bold rounded-md hover:bg-gray-50 transition-all text-sm uppercase whitespace-nowrap">
              READ MORE
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-170 h-full md:h-170 md:overflow-hidden flex items-end">
          <img
            src="/image/story.png"
            className="md:scale-[1.6] scale-[1.25] origin-[60%_100%] md:origin-[45%_100%]"
            alt="Story"
          />
        </div>
      </div>
    </section>
  );
}

export default Storyteller;
