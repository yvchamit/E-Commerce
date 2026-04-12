import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOrder } from "../lib/orderService";
import { clearCart } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import PaymentStep from "../sections/singUp/PaymentStep";
import AddressStep from "../sections/singUp/AddressStep";
import OrderSummary from "../sections/shoppingCart/OrderSummary";

const OrderPage = () => {
  const [activeStep, setActiveStep] = useState("address");
  const { cart, address: selectedAddress } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const cartTotal = cart.reduce((total, item) => {
    return total + item.count * item.product.price;
  }, 0);

  const shippingCost = cartTotal > 500 || cartTotal === 0 ? 0 : 29.99;
  const grandTotal = cartTotal + shippingCost;

  const handleCompleteOrder = async (paymentData) => {
    try {
      await createOrder(
        cart,
        selectedAddress,
        paymentData.selectedCard,
        paymentData.installments,
        grandTotal,
      );

      dispatch(clearCart());
      toast.success("Siparişiniz başarıyla alındı!");
      history.push("/order-success");
    } catch (error) {
      console.error("Sipariş tamamlama hatası:", error);
      toast.error("Sipariş oluşturulurken bir hata oluştu.");
    }
  };

  const handleStepClick = (step) => {
    if (step === "payment") {
      if (!selectedAddress) {
        toast.warn("Lütfen devam etmeden önce bir adres seçin.");
        return;
      }
    }
    setActiveStep(step);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header page="contact" />
      <div className="max-w-section mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="flex-2">
          <div className="flex mb-8 bg-white rounded-lg shadow-sm border overflow-hidden">
            <div
              onClick={() => handleStepClick("address")}
              className={`flex-1 text-center py-4 font-bold cursor-pointer transition-all border-r ${
                activeStep === "address"
                  ? "text-blue-500 border-b-4 border-b-blue-500 bg-blue-50/30"
                  : "text-gray-400 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${activeStep === "address" ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"}`}
                >
                  1
                </span>
                Adres Bilgileri
              </span>
            </div>

            <div
              onClick={() => handleStepClick("payment")}
              className={`flex-1 text-center py-4 font-bold cursor-pointer transition-all ${
                activeStep === "payment"
                  ? "text-blue-500 border-b-4 border-b-blue-500 bg-blue-50/30"
                  : "text-gray-400 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${activeStep === "payment" ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"}`}
                >
                  2
                </span>
                Ödeme Seçenekleri
              </span>
            </div>
          </div>

          {/* ADIM İÇERİKLERİ */}
          {activeStep === "address" ? (
            <AddressStep onNext={() => setActiveStep("payment")} />
          ) : (
            <PaymentStep
              onBack={() => setActiveStep("address")}
              onFinish={handleCompleteOrder}
            />
          )}
        </div>

        <div className="flex-1">
          <OrderSummary totalPrice={cartTotal} hideButton={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
