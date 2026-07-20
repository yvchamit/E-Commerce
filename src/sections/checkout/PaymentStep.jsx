import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, deleteCard } from "../../store/actions/paymentActions";
import { setPayment } from "../../store/actions/shoppingCartActions";
import { useCartSummary } from "../../hooks/useCartSummary";
import { Plus, CreditCard, Trash2 } from "lucide-react";
import CardForm from "../signUp/CardForm";

const formatTL = (amount) =>
  amount.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const INSTALLMENT_OPTIONS = [
  { count: 1, label: "Tek Çekim" },
  { count: 3, label: "3 Taksit" },
];

const PaymentStep = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.payment.cardList);
  const selectedCard = useSelector((state) => state.shoppingCart.payment);
  const { grandTotal } = useCartSummary();
  const [showCardForm, setShowCardForm] = useState(false);

  const installments = selectedCard?.installments ?? 1;

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleSelectCard = (card) => {
    dispatch(setPayment({ ...card, installments: 1 }));
  };

  const handleSelectInstallments = (n) => {
    dispatch(setPayment({ ...selectedCard, installments: n }));
  };

  const handleDeleteCard = (e, cardId) => {
    e.stopPropagation();
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      dispatch(deleteCard(cardId));
      if (selectedCard?.id === cardId) dispatch(setPayment({}));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* KART SEÇİM ALANI */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Kart Bilgileri</h2>
          {cardList.length > 0 && (
            <button
              onClick={() => setShowCardForm(true)}
              className="flex items-center gap-2 bg-[#23A6F0] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1a8cd3] transition-all shadow-md"
            >
              <Plus size={18} /> Yeni Kart Ekle
            </button>
          )}
        </div>

        {cardList.length === 0 ? (
          <div className="text-center py-12 px-4">
            <div className="inline-flex p-4 rounded-full bg-slate-100 mb-4">
              <CreditCard size={32} className="text-slate-400" />
            </div>
            <p className="font-bold text-slate-700 mb-1">
              Henüz kayıtlı kartınız yok
            </p>
            <p className="text-sm text-slate-500 mb-6">
              Ödemeye devam edebilmek için bir kart ekleyin.
            </p>
            <button
              onClick={() => setShowCardForm(true)}
              className="inline-flex items-center gap-2 bg-[#23A6F0] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#1a8cd3] transition-all shadow-md"
            >
              <Plus size={18} /> İlk Kartını Ekle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardList.map((card) => (
              <div
                key={card.id}
                onClick={() => handleSelectCard(card)}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all relative ${
                  selectedCard?.id === card.id
                    ? "border-[#23A6F0] bg-blue-50"
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <CreditCard
                    className={
                      selectedCard?.id === card.id
                        ? "text-[#23A6F0]"
                        : "text-slate-400"
                    }
                  />
                  <button
                    onClick={(e) => handleDeleteCard(e, card.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="font-bold text-slate-700 tracking-wider">
                  **** **** **** {String(card.card_no).slice(-4)}
                </p>
                <div className="flex justify-between mt-4 text-xs text-slate-500 font-medium">
                  <span className="uppercase">{card.name_on_card}</span>
                  <span>
                    {(card.expire_month?.toString() || "00").padStart(2, "0")}/
                    {card.expire_year || "0000"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TAKSİT SEÇENEKLERİ */}
      {selectedCard?.id && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-top-2">
          <h3 className="font-bold mb-4 text-slate-800">Taksit Seçenekleri</h3>
          <div className="grid grid-cols-1 border rounded-lg overflow-hidden border-slate-100">
            {INSTALLMENT_OPTIONS.map((option, index) => {
              const isSelected = installments === option.count;
              const isLast = index === INSTALLMENT_OPTIONS.length - 1;
              const perInstallment = grandTotal / option.count;

              return (
                <div
                  key={option.count}
                  onClick={() => handleSelectInstallments(option.count)}
                  className={`flex justify-between p-4 cursor-pointer transition-colors ${
                    isLast ? "" : "border-b"
                  } ${isSelected ? "bg-blue-50/50" : "hover:bg-slate-50"}`}
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="installment"
                      checked={isSelected}
                      onChange={() => handleSelectInstallments(option.count)}
                      className="w-4 h-4 accent-[#23A6F0]"
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </label>
                  <span
                    className={`font-bold ${
                      option.count === 1 ? "text-[#23A6F0]" : "text-slate-700"
                    }`}
                  >
                    {option.count === 1
                      ? `${formatTL(grandTotal)} TL`
                      : `${option.count} x ${formatTL(perInstallment)} TL`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showCardForm && <CardForm onClose={() => setShowCardForm(false)} />}
    </div>
  );
};

export default PaymentStep;