import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { toast } from "react-toastify";
import { toggleWishlist } from "../../store/actions/productActions";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Ürün sepete eklendi!");
  };

  const isFavorite = useSelector((state) => 
    state.product.wishlist.some((item) => item.id === product.id)
  );

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
    if (!isFavorite) {
      toast.success("Favorilerime eklendi!");
    }
  };
  const [activeImg, setActiveImg] = useState(0);

  const productImages =
    product?.images?.length > 0
      ? product.images.map((img) => img.url)
      : ["https://via.placeholder.com/600x800?text=No+Image"];

  const nextImg = () =>
    setActiveImg((prev) => (prev + 1) % productImages.length);
  const prevImg = () =>
    setActiveImg(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );

  return (
    <div className="bg-[#FAFAFA] px-8 pb-8 font-sans text-[#252B42]">
      <div className="max-w-section mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative group mb-4 h-112.5 overflow-hidden rounded-sm shadow-sm">
            <img
              src={productImages[activeImg]}
              className="w-full h-full object-cover transition-opacity duration-300"
              alt={product?.name}
            />

            {productImages.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform bg-black/10 rounded-full p-2"
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform bg-black/10 rounded-full p-2"
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {productImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImg(index)}
                className={`w-24 h-24 shrink-0 cursor-pointer transition-all border-2 ${
                  activeImg === index
                    ? "border-[#23A6F0] opacity-100"
                    : "border-transparent opacity-50"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={`thumb ${index}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-5 py-2">
          <h1 className="text-xl font-normal tracking-tight">
            {product?.name}
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill={
                    star <= Math.round(product?.rating) ? "#F3CD03" : "none"
                  }
                  stroke="#F3CD03"
                />
              ))}
            </div>
            <span className="text-[#737373] text-sm font-bold">
              {product?.sell_count || 0} Reviews
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-bold">${product?.price}</p>
            <p className="text-sm font-bold">
              <span className="text-[#737373]">Availability :</span>
              <span
                className={
                  product?.stock > 0
                    ? "text-[#23A6F0] ml-2"
                    : "text-red-500 ml-2"
                }
              >
                {product?.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>

          <p className="text-[#858585] text-sm leading-relaxed max-w-sm font-semibold">
            {product?.description}
          </p>

          <hr className="border-[#ECECEC] w-full my-6" />

          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-[#23A6F0] border-2 border-transparent focus:border-gray-400"></button>
            <button className="w-8 h-8 rounded-full bg-[#2DC071] border-2 border-transparent focus:border-gray-400"></button>
            <button className="w-8 h-8 rounded-full bg-[#E77C40] border-2 border-transparent focus:border-gray-400"></button>
            <button className="w-8 h-8 rounded-full bg-[#252B42] border-2 border-transparent focus:border-gray-400"></button>
          </div>

          <div className="flex items-center gap-3 pt-8">
            <button
              onClick={handleAddToCart}
              className="bg-[#23A6F0] text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-[#1a8cd3] transition-colors shadow-sm active:scale-95"
            >
              Add to Cart
            </button>

            <div className="flex gap-2">
              <button
                onClick={handleToggleWishlist}
                className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center bg-white transition-all active:scale-90 shadow-sm"
              >
                <Heart
                  size={18}
                  className={`transition-colors ${
                    isFavorite ? "fill-red-500 text-red-500" : "text-[#252B42]"
                  }`}
                />
              </button>
              {/* <button className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <ShoppingCart size={18} />
              </button>
              <button className="w-10 h-10 border border-[#E8E8E8] rounded-full flex items-center justify-center bg-white text-[#252B42] hover:bg-gray-50 transition-colors">
                <Eye size={18} />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
