import React from 'react';

const TeamHero = () => {
  // Görsel URL'lerini projedeki gerçek yollarla değiştirebilirsin
  const images = [
    "/image/teamHero1.jpg",
    "/image/teamHero2.jpg",
    "/image/teamHero3.jpg",
    "/image/teamHero4.jpg",
    "/image/team6.jpg",
  ];

  return (
    <section className="bg-[#FAFAFA]">
      <div className="mx-auto max-w-page flex flex-col md:flex-row gap-2 my-2 md:my-8 ">
        
        {/* MOBİLDE ÜSTTE, MASAÜSTÜNDE SAĞDA: BÜYÜK İMAJ */}
        <div className="order-1 md:w-1/2">
          <div className="w-full h-full md:aspect-4/3 aspect-2/3">
            <img 
              src={images[4]} 
              alt="Team Big" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* MOBİLDE ALTTA, MASAÜSTÜNDE SOLDA: 4'LÜ KÜÇÜK İMAJLAR */}
        <div className="order-2 md:w-1/2 grid grid-cols-2 gap-2">
          {images.slice(0, 4).map((img, index) => (
            <div key={index} className="md:aspect-4/3 aspect-2/3">
              <img 
                src={img} 
                alt={`Team Small ${index}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamHero;