import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import confetti from "canvas-confetti";
import { CheckCircle } from "lucide-react";
import CategoryList from "../sections/shop/CategoryList";
import SignUpFooterInfo from "../sections/singUp/SignUpFooterInfo";

const OrderSuccessPage = () => {
  const { categories } = useSelector((state) => state.product);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#23A6F0", "#2DC071", "#23856D"],
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 text-center space-y-6 border-b border-[#FAFAFA]">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
          <CheckCircle className="text-[#2DC071]" size={56} strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-8">
          Siparişiniz İçin Teşekkürler!
        </h1>
        <p className="text-[#737373] text-lg max-w-md mx-auto px-8">
          Harika bir seçim yaptınız.<br className="block" />Sipariş numaranız:{" "}
          <span className="text-[#252B42] font-bold">#ORD-5542</span>
        </p>
      </section>

      <section className="mx-auto pt-16 pb-24 px-4 bg-[#FAFAFA]">
        <div className="mb-8">
          <CategoryList categories={topCategories} />
        </div>
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#252B42] mb-4 leading-tight">
            Alışveriş Keyfine Devam Et
          </h2>
          <p className="text-[#737373] text-base md:text-lg max-w-2xl px-8">
            Sizin için seçtiğimiz en popüler kategorilere göz atarak stilinizi
            tamamlamaya devam edebilirsiniz.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-8">
          <Link
            to="/"
            className="w-full sm:w-auto text-center bg-[#252B42] border-2 border-[#252B42] text-white px-12 py-4 rounded-md font-bold hover:bg-transparent hover:text-[#252B42] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ANA SAYFAYA DÖN
          </Link>

          <Link
            to="/shop"
            className="w-full sm:w-auto text-center bg-[#23A6F0] border-2 border-[#23A6F0] text-white px-12 py-4 rounded-md font-bold hover:bg-transparent hover:text-[#23A6F0] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            TÜM ÜRÜNLERİ GÖR
          </Link>
        </div>
      </section>
      <SignUpFooterInfo />
    </div>
  );
};

export default OrderSuccessPage;
