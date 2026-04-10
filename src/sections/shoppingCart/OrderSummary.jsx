import { Link } from "react-router-dom";
import { ChevronRight, Ticket } from "lucide-react";

const OrderSummary = ({ totalPrice }) => {
  const shippingCost = totalPrice > 500 || totalPrice === 0 ? 0 : 29.99;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="flex flex-col gap-4 sticky top-28">
      {/* ANA ÖZET KARTI */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-6 text-[#252B42]">Order Summary</h3>
        
        <div className="flex flex-col gap-4 text-sm">
          {/* Ürün Toplamı */}
          <div className="flex justify-between text-[#737373]">
            <span>Product Total</span>
            <span className="font-bold text-[#252B42]">{totalPrice.toLocaleString()} TL</span>
          </div>

          {/* Kargo Toplamı */}
          <div className="flex justify-between text-[#737373]">
            <span>Shipping Total</span>
            <span className="font-bold text-[#252B42]">{shippingCost > 0 ? `${shippingCost} TL` : "Free"}</span>
          </div>

          {/* Kargo Bedava */}
          {shippingCost > 0 && (
            <div className="bg-orange-50 p-3 rounded-md border border-dashed border-orange-200">
              <p className="text-[11px] text-orange-700">
                Add <strong>{(500 - totalPrice).toFixed(2)} TL</strong> more for Free Shipping!
              </p>
            </div>
          )}

          <hr className="my-2 border-gray-100" />

          {/* Genel Toplam */}
          <div className="flex justify-between items-center py-2">
            <span className="text-base text-[#252B42]">Total Amount</span>
            <span className="text-2xl font-bold text-[#23A6F0]">
              {grandTotal.toLocaleString()} TL
            </span>
          </div>
        </div>

        {/* Aksiyon Butonu */}
        <Link
          to="/checkout"
          className="w-full mt-6 bg-[#23A6F0] text-white py-4 rounded-md font-bold text-lg hover:bg-[#1a8cd3] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
        >
          Create Order
          <ChevronRight size={20} />
        </Link>
      </div>

      {/* İNDİRİM KUPONU KARTI */}
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#23A6F0]">
          <Ticket size={20} />
        </div>
        <span className="text-sm font-bold text-[#252B42] flex-1">Enter Discount Code</span>
        <ChevronRight size={18} className="text-[#737373]" />
      </div>
    </div>
  );
};

export default OrderSummary;