const CategoryCard = ({ title, count, img }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer aspect-3/4 md:aspect-[1/1.2]">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300" />

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-4 gap-4">
        <h5 className="font-bold text-base tracking-wide uppercase">{title}</h5>
        <span className="text-sm font-semibold opacity-90">{count} Items</span>
      </div>
    </div>
  );
};

export default CategoryCard;


/* Mobil icin: flex overflow-x-auto snap-x pb-4 */