import { useDispatch } from "react-redux";
import { updateCartItem, toggleCheckItem, removeFromCart } from "../../store/actions/cartActions";
import { Trash2, Plus, Minus } from "lucide-react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { product, count, checked } = item;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 group transition-all hover:border-[#23A6F0]/30">
      
      {/* 1. SEÇİM VE GÖRSEL */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(toggleCheckItem(product.id))}
          className="w-5 h-5 accent-[#23A6F0] cursor-pointer rounded"
        />
        <div className="w-20 h-28 shrink-0 overflow-hidden rounded-md border border-gray-100">
          <img
            src={product.images?.[0]?.url || product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>

      {/* 2. ÜRÜN BİLGİLERİ */}
      <div className="flex flex-col flex-1 min-w-0 w-full">
        <h3 className="font-bold text-[#252B42] text-sm md:text-base line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-[#737373] mt-1 line-clamp-1 italic">
          {product.description}
        </p>
        
        {/* KARGO BİLGİSİ */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">
            FREE SHIPPING
          </span>
          <span className="text-[10px] text-[#737373]">Aras Kargo</span>
        </div>
      </div>

      {/* 3. MİKTAR VE FİYAT KONTROLÜ */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4">
        
        {/* MİKTAR BUTONLARI */}
        <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
          <button
            onClick={() => dispatch(updateCartItem(product.id, count - 1))}
            className="p-2 hover:text-[#23A6F0] disabled:opacity-30 transition-colors"
            disabled={count <= 1}
          >
            <Minus size={14} />
          </button>
          <span className="w-8 text-center font-bold text-sm">{count}</span>
          <button
            onClick={() => dispatch(updateCartItem(product.id, count + 1))}
            className="p-2 hover:text-[#23A6F0] transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>

        {/* FİYAT VE SİLME */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-lg font-bold text-[#252B42]">
              {(product.price * count).toLocaleString()} TL
            </p>
            {count > 1 && (
              <p className="text-[10px] text-[#737373]">
                Unit: {product.price.toLocaleString()} TL
              </p>
            )}
          </div>
          
          <button
            onClick={() => dispatch(removeFromCart(product.id))}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            title="Remove Item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;