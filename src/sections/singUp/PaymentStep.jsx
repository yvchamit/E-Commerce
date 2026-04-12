import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  deleteCard,
} from "../../store/actions/paymentActions";
import { Plus, CreditCard, Trash2, ChevronRight } from "lucide-react";
import CardForm from "./CardForm";

const PaymentStep = ({ onFinish }) => {
  const dispatch = useDispatch();
  const { cardList } = useSelector((state) => state.payment);
  const [showCardForm, setShowCardForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [installments, setInstallments] = useState(1);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleDeleteCard = (e, cardId) => {
    e.stopPropagation(); // Kartın seçilmesini engelle
    if (window.confirm("Bu kartı silmek istediğinize emin misiniz?")) {
      dispatch(deleteCard(cardId));
      if (selectedCard?.id === cardId) setSelectedCard(null);
    }
  };

  const cart = useSelector((state) => state.cart?.cart || []);
  const subtotal = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  const shippingCost = subtotal > 500 || subtotal === 0 ? 0 : 29.99;
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="flex flex-col gap-6">
      {/* KART SEÇİM ALANI */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Card Information</h2>
          <button
            onClick={() => setShowCardForm(true)}
            className="text-[#23A6F0] font-bold text-sm flex items-center gap-1 hover:underline"
          >
            <Plus size={16} /> Pay with another card
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cardList.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
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
                **** **** **** {card.card_no.slice(-4)}
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
      </div>

      {/* TAKSİT SEÇENEKLERİ */}
      {selectedCard && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-top-2">
          <h3 className="font-bold mb-4 text-slate-800">Installment Options</h3>
          <div className="grid grid-cols-1 border rounded-lg overflow-hidden border-slate-100">
            {/* TEK ÇEKİM */}
            <div
              onClick={() => setInstallments(1)}
              className={`flex justify-between p-4 cursor-pointer border-b transition-colors ${
                installments === 1 ? "bg-blue-50/50" : "hover:bg-slate-50"
              }`}
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="installment"
                  checked={installments === 1}
                  onChange={() => setInstallments(1)}
                  className="w-4 h-4 accent-[#23A6F0]"
                />
                <span className="text-sm font-medium">Single Payment</span>
              </label>
              <span className="font-bold text-[#23A6F0]">
                {grandTotal.toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                })}{" "}
                TL
              </span>
            </div>

            {/* 3 TAKSİT */}
            <div
              onClick={() => setInstallments(3)}
              className={`flex justify-between p-4 cursor-pointer transition-colors ${
                installments === 3 ? "bg-blue-50/50" : "hover:bg-slate-50"
              }`}
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="installment"
                  checked={installments === 3}
                  onChange={() => setInstallments(3)}
                  className="w-4 h-4 accent-[#23A6F0]"
                />
                <span className="text-sm font-medium">3 Installments</span>
              </label>
              <span className="font-bold text-slate-700">
                3 x{" "}
                {(grandTotal / 3).toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                TL
              </span>
            </div>
          </div>

          {/* SİPARİŞİ TAMAMLA BUTONU */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => onFinish({ selectedCard, installments })}
              className="bg-[#23A6F0] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#1a8cd3] transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
            >
              Confirm and Complete Order
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}

      {showCardForm && <CardForm onClose={() => setShowCardForm(false)} />}
    </div>
  );
};

export default PaymentStep;
