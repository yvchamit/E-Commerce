import { Link } from "react-router-dom";

export default function CategoryCard({ cat }) {
  const gender = cat.gender === "k" ? "kadin" : "erkek";
  const categoryName = cat.code.split(":")[1];

  return (
    <Link
      to={`/shop/${gender}/${categoryName}/${cat.id}`}
      className="relative h-55 group overflow-hidden cursor-pointer shadow-md"
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-white transition-colors group-hover:bg-black/40">
        <h4 className="font-bold text-base uppercase">{cat.title}</h4>
        <p className="text-sm font-normal font-montserrat">
          Rating: {cat.rating}
        </p>
      </div>
    </Link>
  );
}

/* Mobil icin: flex overflow-x-auto snap-x pb-4 */
