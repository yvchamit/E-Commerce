import React from "react";

const WorkWithUs = () => {
  return (
    <section className="w-full bg-[#252B42] overflow-hidden">
      {/* 3. Kritik Nokta: Toplam Genişlik max-w-page (Örn: 1440px veya 1600px) */}
      <div className="max-w-page mx-auto flex flex-col md:flex-row items-stretch">
        {/* 1 & 2. Mavi Alan (#2A7CC7) ve Metin Hizalaması */}
        {/* md:w-[60%] ile alanı bölüyoruz */}
        <div className="w-full md:w-[60%] bg-[#2A7CC7] text-white py-24 md:py-40 flex justify-end">
          {/* Metinleri üstteki elemanlarla (max-w-section) hizalamak için:
              Bu div'in genişliği, üstteki section'ın tam yarısı kadar (720px) olmalı */}
          <div className="w-full max-w-180 px-8 md:px-20 flex flex-col gap-8 text-center md:text-left items-center md:items-start">
            <h5 className="font-bold text-base uppercase tracking-widest text-white">
              WORK WITH US
            </h5>

            <h2 className="text-[40px] font-bold leading-tight tracking-tight text-white max-w-60 md:max-w-112.5">
              Now Let’s grow Yours
            </h2>

            <p className="text-sm font-medium text-white/90 leading-relaxed max-w-60 md:max-w-110">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>

            <button className="border border-white text-white px-10 py-3 rounded-md font-bold hover:bg-white hover:text-[#2A7CC7] transition-all self-center md:self-start">
              Button
            </button>
          </div>
        </div>

        {/* 3. İmaj Alanı: md:w-[40%] ve Mobil Görünmezlik */}
        <div className="hidden md:block md:w-[40%] relative">
          <img
            src="/image/workWithUs.jpg"
            alt="Work with us team"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
