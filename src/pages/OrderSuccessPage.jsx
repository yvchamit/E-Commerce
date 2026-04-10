import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="animate-bounce">
        <CheckCircle size={80} className="text-green-500 mb-6" />
      </div>
      <h1 className="text-4xl font-bold text-[#252B42] mb-4 text-center uppercase">
        Congratulations!
      </h1>
      <p className="text-lg text-[#737373] mb-8 text-center max-w-md font-medium">
        Your order has been placed successfully. We've sent a confirmation email
        with your order details.
      </p>
      <Link
        to="/"
        className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#1a8cd3] transition-all shadow-lg hover:shadow-xl active:scale-95"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccessPage;
