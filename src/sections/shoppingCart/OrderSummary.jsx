import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRight, AlertCircle } from "lucide-react";

const OrderSummary = ({ totalPrice = 0, hideButton = false }) => {
  const { cart } = useSelector((state) => state.cart);

  const checkedItems = cart.filter((item) => item.checked === true);
  console.log("BURASI BURASI BURASI:", checkedItems);
  const isNothingSelected = checkedItems.length === 0;

  const safeTotalPrice = Number(totalPrice) || 0;
  const shippingCost = safeTotalPrice > 500 || safeTotalPrice === 0 ? 0 : 29.99;
  const grandTotal = safeTotalPrice + shippingCost;

  return (
    <div className="flex flex-col gap-4 sticky top-28">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold mb-6 text-[#252B42]">Order Summary</h3>

        <div className="flex flex-col gap-4 text-sm">
          {/* Ürün Toplamı */}
          <div className="flex justify-between text-[#737373]">
            <span>Product Total</span>
            <span className="font-bold text-[#252B42]">
              {safeTotalPrice.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
              })}{" "}
              TL
            </span>
          </div>

          {/* Kargo Toplamı */}
          <div className="flex justify-between text-[#737373]">
            <span>Shipping Total</span>
            <span className="font-bold text-[#252B42]">
              {shippingCost > 0 ? `${shippingCost.toFixed(2)} TL` : "Free"}
            </span>
          </div>

          {/* Ücretsiz Kargo Bilgilendirmesi */}
          {!hideButton && shippingCost > 0 && safeTotalPrice > 0 && (
            <div className="bg-orange-50 p-3 rounded-md border border-dashed border-orange-200">
              <p className="text-[11px] text-orange-700">
                Add <strong>{(500 - safeTotalPrice).toFixed(2)} TL</strong> more
                for Free Shipping!
              </p>
            </div>
          )}

          <hr className="my-2 border-gray-100" />

          {/* Genel Toplam */}
          <div className="flex justify-between items-center py-2">
            <span className="text-base text-[#252B42]">Total Amount</span>
            <span className="text-2xl font-bold text-[#23A6F0]">
              {grandTotal.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}{" "}
              TL
            </span>
          </div>
        </div>

        {!hideButton && (
          <div className="mt-6 flex flex-col gap-2">
            <Link
              to={isNothingSelected ? "#" : "/create-order"}
              onClick={(e) => isNothingSelected && e.preventDefault()}
              className={`w-full py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-md 
                ${
                  isNothingSelected
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-[#23A6F0] text-white hover:bg-[#1a8cd3] hover:shadow-lg active:scale-95"
                }`}
            >
              {isNothingSelected ? "Select Products" : "Create Order"}
              <ChevronRight size={20} />
            </Link>

            {isNothingSelected && cart.length > 0 && (
              <div className="flex items-center gap-2 text-[#E74C3C] text-[11px] font-semibold justify-center animate-pulse">
                <AlertCircle size={14} />
                <span>Please select items in cart to proceed</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
