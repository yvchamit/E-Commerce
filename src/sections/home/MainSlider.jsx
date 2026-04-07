import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function MainSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 0, img: "/image/mainSlider.jpg", title: "Previous Collection", description:"We do not know how large objects will act, but things on a small scale." },
    { id: 1, img: "/image/mainSlider2.jpg", title: "Next Collection", description:"We know how large objects will act, but things on a small scale." },
  ];

  const handleNext = () => setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  const handlePrev = () => setActiveSlide((prev) => (prev === 1 ? 0 : 1));
  return (
    <section className="relative w-full h-179 overflow-hidden bg-[#00b0d7]">
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
        <div className="w-full max-w-page h-full flex items-center justify-center">
          <img
            src={slides[activeSlide].img}
            alt="Main Slider"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-page mx-auto px-6 md:px-37.5">
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl space-y-8 text-white mx-auto md:mx-0">
            <h5 className="font-bold uppercase tracking-widest text-base">
              Summer 2020
            </h5>
            <h1 className="text-5xl md:text-[58px] font-bold leading-tight uppercase">
              {slides[activeSlide].title}
            </h1>
            <p className="text-xl max-w-sm opacity-90 p-8 md:px-0 color-[#FAFAFA]">
              {slides[activeSlide].description}
            </p>
            <button className="bg-[#2DC071] px-10 py-4 rounded-md text-2xl font-bold hover:scale-105 transition-all shadow-lg uppercase inline-block w-fit">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-112.5 md:max-w-375 mx-auto h-full relative">
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white rounded-full transition-all cursor-pointer pointer-events-auto"
          >
            <ChevronLeft
              className="w-15 h-15 md:w-18 md:h-18"
              strokeWidth={1}
            />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white rounded-full transition-all cursor-pointer pointer-events-auto"
          >
            <ChevronRight
              className="w-15 h-15 md:w-18 md:h-18"
              strokeWidth={1}
            />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 z-30">
        <div
          onClick={handlePrev}
          className={`w-12 h-2 cursor-pointer transition-all ${activeSlide === 0 ? "bg-white" : "bg-white/40"}`}
        ></div>
        <div
          onClick={handleNext}
          className={`w-12 h-2 cursor-pointer transition-all ${activeSlide === 1 ? "bg-white" : "bg-white/40"}`}
        ></div>
      </div>
    </section>
  );
}

export default MainSlider;
