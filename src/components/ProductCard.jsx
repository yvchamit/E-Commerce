import { cn } from "../lib/mergeClass";
import ProductColors from "./ProductColors";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  showColors = true,
  aspect = "3/4",
  align = "center",
  view = "grid",
}) {
  const isList = view === "list";
  const isLeft = align === "left" || isList;

  if (!product) return null;

  const name = product.name || product.title || "Adsız Ürün";
  const description = product.description || "Açıklama bulunmuyor.";
  const price = product.price || 0;
  const oldPrice = (price * 1.2).toFixed(2);

  const productNameSlug = name.toLowerCase().replace(/\s+/g, "-");
  const gender = product.gender === "m" ? "erkek" : "kadin";
  const categoryName = "product";

  const detailUrl = `/shop/${gender}/${categoryName}/${product.category_id}/${product.id}/${productNameSlug}`;

  return (
    <Link
      to={detailUrl}
      className={cn(
        "group cursor-pointer bg-[#FFFFFF] transition-all duration-300 block",
        isList
          ? "flex flex-row items-center gap-8 w-full border-b border-[#ECECEC] pb-8"
          : cn(
              "flex flex-col h-full",
              isLeft ? "items-start text-left" : "items-center text-center",
            ),
      )}
    >
      {/* Görsel Bölümü */}
      <div
        style={{ aspectRatio: isList ? "1/1" : aspect }}
        className={cn(
          "overflow-hidden bg-gray-200 transition-all",
          isList ? "w-48 h-48 md:w-64 md:h-64 shrink-0" : "w-full mb-6",
        )}
      >
        <img
          src={
            product.images?.[0]?.url ||
            "https://via.placeholder.com/300x400?text=No+Image"
          }
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          alt={name}
        />
      </div>

      {/* Bilgi Bölümü */}
      <div
        className={cn(
          "flex flex-col px-2 w-full",
          isLeft ? "items-start md:pl-4" : "items-center",
        )}
      >
        <h5 className="font-bold text-[#252B42] text-xl line-clamp-1 group-hover:text-[#23A6F0] transition-colors">
          {name}
        </h5>

        <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
          {description}
        </p>

        <div
          className={cn(
            "flex gap-2 font-bold mb-4",
            isLeft ? "justify-start" : "justify-center",
          )}
        >
          <span className="text-[#BDBDBD] font-bold line-through">
            ${oldPrice}
          </span>
          <span className="text-[#23856D] font-bold">${price}</span>
        </div>

        {showColors && (
          <div className={isLeft ? "w-full flex justify-start" : ""}>
            <ProductColors colors={product.colors} />
          </div>
        )}

        {isList && (
          <p className="text-[#737373] text-sm mt-4 hidden md:line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
