import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOrder } from "../lib/orderService";
import {
  clearCart,
  setAddress,
  setPayment,
} from "../store/actions/shoppingCartActions";
import { useCartSummary } from "../hooks/useCartSummary";
import { toast } from "react-toastify";
import { cn } from "../lib/mergeClass";
import { ChevronRight } from "lucide-react";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import PaymentStep from "../sections/checkout/PaymentStep";
import AddressStep from "../sections/checkout/AddressStep";
import OrderSummary from "../sections/shoppingCart/OrderSummary";
import { getStoredToken } from "../store/actions/clientActions";

const STEPS = [
  { key: "address", label: "Adres Bilgileri", number: 1 },
  { key: "payment", label: "Ödeme Seçenekleri", number: 2 },
];

const OrderPage = () => {
  const [activeStep, setActiveStep] = useState("address");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((s) => s.shoppingCart.cart);
  const selectedAddress = useSelector((s) => s.shoppingCart.address);
  const selectedPayment = useSelector((s) => s.shoppingCart.payment);
  const { subtotal, grandTotal } = useCartSummary();

  const isAddressStep = activeStep === "address";

  useEffect(() => {
    if (activeStep === "payment" && !selectedAddress?.id) {
      toast.warn("Lütfen önce bir teslimat adresi seçin.");
      setActiveStep("address");
    }
  }, [activeStep, selectedAddress]);

  const canProceed = isAddressStep
    ? !!selectedAddress?.id
    : !!selectedAddress?.id && !!selectedPayment?.id && !isSubmitting;

  const handleCompleteOrder = async () => {
    if (!getStoredToken()) {
      toast.info("Siparişi tamamlamak için giriş yapmalısınız.");
      history.push("/login", { from: "/create-order" });
      return;
    }
    setIsSubmitting(true);
    try {
      await createOrder(cart, selectedAddress, selectedPayment, grandTotal);
      dispatch(clearCart());
      dispatch(setPayment({}));
      dispatch(setAddress({}));
      toast.success("Siparişiniz başarıyla alındı!");
      history.push("/order-success");
    } catch (error) {
      console.error("Sipariş tamamlama hatası:", error);
      toast.error("Sipariş oluşturulurken bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrimaryAction = () => {
    if (isAddressStep) {
      setActiveStep("payment");
    } else {
      handleCompleteOrder();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header page="contact" />
      <div className="max-w-section mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="flex-2">
          {/* ADIM BAŞLIKLARI */}
          <div className="flex mb-8 bg-white rounded-lg shadow-sm overflow-hidden">
            {STEPS.map((step, i) => {
              // Ödeme adımı yalnızca adres seçiliyken tıklanabilir
              const isLocked = step.key === "payment" && !selectedAddress?.id;
              return (
                <div
                  key={step.key}
                  onClick={() => {
                    if (isLocked) {
                      toast.warn("Lütfen önce bir teslimat adresi seçin.");
                      return;
                    }
                    setActiveStep(step.key);
                  }}
                  className={cn(
                    "flex-1 text-center py-4 font-bold transition-all",
                    i < STEPS.length - 1 && "border-r",
                    isLocked
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer",
                    activeStep === step.key
                      ? "text-blue-500 border-b-4 border-b-blue-500 bg-blue-50/30"
                      : "text-gray-400 hover:bg-gray-50",
                  )}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span
                      className={cn(
                        "w-6 h-6 rounded-full border flex items-center justify-center text-xs",
                        activeStep === step.key
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-gray-300",
                      )}
                    >
                      {step.number}
                    </span>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {isAddressStep ? <AddressStep /> : <PaymentStep />}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <OrderSummary totalPrice={subtotal} hideButton={true} />

          <button
            disabled={!canProceed}
            onClick={handlePrimaryAction}
            className={cn(
              "w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2",
              canProceed
                ? "bg-[#23A6F0] text-white hover:bg-[#1a8cd3] shadow-lg active:scale-95"
                : "bg-gray-200 text-gray-400 cursor-not-allowed",
            )}
          >
            {isSubmitting
              ? "Sipariş oluşturuluyor..."
              : isAddressStep
                ? "Save and Continue"
                : "Complete Order"}
            {!isSubmitting && <ChevronRight size={22} />}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
