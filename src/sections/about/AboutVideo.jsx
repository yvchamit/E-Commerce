import React from 'react';
import { Play } from 'lucide-react'; // Play ikonu için

const AboutVideo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-section mx-auto px-8 md:px-0">
        
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl">
          
          <img 
            src="/image/videoCover.jpg" 
            alt="Video Cover" 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-all duration-300" />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 md:w-24 md:h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 active:scale-95">
              <Play fill="white" className="w-8 h-8 md:w-10 md:h-10 ml-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutVideo;