import { cn } from "../lib/mergeClass";
import ProductColors from "./ProductColors";

function ProductCard({
  product, // Tüm veriyi bu obje üzerinden alıyoruz
  showColors = true,
  aspect = "3/4",
  align = "center",
  view = "grid",
}) {
  const isList = view === "list";
  const isLeft = align === "left" || isList;

  // Güvenlik: Eğer product objesi gelmezse hata vermemesi için
  if (!product) return null;

  return (
    <div
      className={cn(
        "group cursor-pointer bg-[#FFFFFF] transition-all duration-300",
        isList
          ? "flex flex-row items-center gap-8 w-full border-b border-[#ECECEC] pb-8"
          : cn(
              "flex flex-col h-full",
              isLeft ? "items-start text-left" : "items-center text-center",
            ),
      )}
    >
      {/* Ürün Görseli */}
      <div
        style={{ aspectRatio: isList ? "1/1" : aspect }}
        className={cn(
          "overflow-hidden bg-gray-200 transition-all",
          isList ? "w-48 h-48 md:w-64 md:h-64 shrink-0" : "w-full mb-6",
        )}
      >
        <img
          src={product.image} // Dinamik resim
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          alt={product.title}
        />
      </div>

      {/* Ürün Bilgileri */}
      <div
        className={cn(
          "flex flex-col px-2 w-full",
          isLeft ? "items-start md:pl-4" : "items-center",
        )}
      >
        <h5 className="font-bold text-[#252B42] text-xl line-clamp-1">
          {product.title} {/* Dinamik Başlık */}
        </h5>

        <p className="text-[#737373] text-sm font-bold my-2 line-clamp-1">
          {product.department} {/* Dinamik Departman */}
        </p>

        <div
          className={cn(
            "flex gap-2 font-bold mb-4",
            isLeft ? "justify-start" : "justify-center",
          )}
        >
          <span className="text-[#BDBDBD]">${product.oldPrice}</span>{" "}
          {/* Dinamik Eski Fiyat */}
          <span className="text-[#23856D]">${product.price}</span>{" "}
          {/* Dinamik Yeni Fiyat */}
        </div>

        {showColors && (
          <div className={isLeft ? "w-full flex justify-start" : ""}>
            {/* Hazırladığın modüler renk bileşeni */}
            <ProductColors colors={product.colors} />
          </div>
        )}

        {isList && (
          <p className="text-[#737373] text-sm mt-4 hidden md:line-clamp-2">
            {product.description} {/* Dinamik Açıklama (Sadece List View) */}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
