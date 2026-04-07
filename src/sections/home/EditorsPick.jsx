const EditorsPick = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-section mx-auto py-20 px-8">
        <div className="text-center mb-12 px-6 md:px-0">
          <h2 className="text-2xl font-bold text-[#252B42] uppercase tracking-tight">
            Editor's Pick
          </h2>
          <p className="text-[#737373] text-sm mt-2 font-semibold px-12">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 h-auto md:h-125">
          <div className="md:col-span-2 relative group overflow-hidden cursor-pointer h-125 md:h-full">
            <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/image/editorsMen.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <button className="absolute bottom-8 left-8 bg-white px-12 py-3 font-bold text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-colors uppercase shadow-md">
              MEN
            </button>
          </div>

          <div className="md:col-span-1 relative group overflow-hidden cursor-pointer h-125 md:h-full">
            <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/image/editorsWomen.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <button className="absolute bottom-8 left-8 bg-white px-8 py-3 font-bold text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-colors uppercase shadow-md">
              WOMEN
            </button>
          </div>

          <div className="md:col-span-1 flex flex-col gap-5 h-full">
            <div className="relative h-60 group overflow-hidden cursor-pointer">
              <div className="w-full h-full bg-gray-400 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/image/editorsAccess.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="absolute bottom-5 left-5 bg-white px-6 py-2 font-bold text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-colors uppercase shadow-md text-sm">
                ACCESSORIES
              </button>
            </div>

            <div className="relative h-60 group overflow-hidden cursor-pointer">
              <div className="w-full h-full bg-gray-500 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/image/editorsKids.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="absolute bottom-5 left-5 bg-white px-10 py-2 font-bold text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-colors uppercase shadow-md text-sm">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
