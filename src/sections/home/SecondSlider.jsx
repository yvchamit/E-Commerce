import ShoppingCart from "lucide-react/dist/esm/icons/shopping-cart";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SecondSlider() {
  return (
    <section className="relative w-full min-h-177.25 bg-[#23856D] overflow-hidden flex items-center pt-20 md:pt-0">
      <div className="w-full max-w-page mx-auto px-6 md:px-36 relative z-10 pt-16">
        <div className="flex flex-col md:flex-row items-center gap-32 w-full">
          <div className="flex-1 text-white space-y-7 text-center md:text-left md:px-0 px-8">
            <h5 className="font-bold uppercase tracking-widest text-base opacity-90">
              SUMMER 2020
            </h5>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Vita Classic <br /> Product
            </h2>

            <p className="text-lg md:text-xl opacity-80 max-w-sm mx-auto md:mx-0 font-medium leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 justify-center md:justify-start">
              <span className="text-2xl font-bold tracking-tight">$16.48</span>

              <button className="bg-[#2DC071] hover:bg-[#25a560] text-white px-10 py-4 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 uppercase w-fit">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex-1 w-full relative h-112.5 md:h-150 flex items-end justify-center">
            <div className="relative z-20 w-full h-full flex items-end justify-center bottom-[-10%] scale-[1.3]">
              <img
                src="./image/secondSlider.png"
                alt="Second Slider"
                className="max-h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-112.5 md:max-w-375 mx-auto h-full relative">
          <button className="absolute left-2 md:left-4 top-4/9 md:top-2/3 -translate-y-1/2 p-0.5 text-white cursor-pointer pointer-events-auto">
            <ChevronLeft
              className="w-15 h-15 md:w-16 md:h-16"
              strokeWidth={1}
            />
          </button>
          <button className="absolute right-2 md:right-4 top-4/9 md:top-2/3 -translate-y-1/2 p-0.5 text-white cursor-pointer pointer-events-auto">
            <ChevronRight
              className="w-15 h-15 md:w-16 md:h-16"
              strokeWidth={1}
            />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 z-30">
        <div className="w-12 h-2 bg-white cursor-pointer"></div>
        <div className="w-12 h-2 bg-white/40 cursor-pointer hover:bg-white/60"></div>
      </div>
    </section>
  );
}

export default SecondSlider;