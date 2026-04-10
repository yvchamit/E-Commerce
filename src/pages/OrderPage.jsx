import React, { useState } from "react";
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header page="contact" />
      <div className="max-w-section mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="flex-2">
          {" "}
          <div className="flex mb-8 bg-white rounded-lg shadow-sm border">
            <div
              className={`flex-1 text-center py-4 font-bold border-r transition-all ${
                activeStep === "address"
                  ? "text-blue-500 border-b-2 border-b-blue-500"
                  : "text-gray-400"
              }`}
            >
              Adres Bilgileri
            </div>
            <div
              className={`flex-1 text-center py-4 font-bold transition-all ${
                activeStep === "payment"
                  ? "text-blue-500 border-b-2 border-b-blue-500"
                  : "text-gray-400"
              }`}
            >
              Ödeme Seçenekleri
            </div>
          </div>
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
