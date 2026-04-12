const AboutIntro = () => {
  return (
    <section className="py-20 px-8 md:px-0 bg-white">
      <div className="max-w-section mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h5 className="text-sm font-bold text-[#E74040]">Problems trying</h5>
          <h2 className="text-2xl font-bold text-[#252B42] leading-tight max-w-75 md:max-w-100">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>

        <div className="flex-1">
          <p className="text-sm text-[#737373] font-medium leading-relaxed mx-auto max-w-80 md:max-w-112.5">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
