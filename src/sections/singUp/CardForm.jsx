import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveCard } from "../../store/actions/paymentActions";

const CardForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = {
      card_no: data.card_no.replace(/\s/g, ""),
      expire_month: parseInt(data.expire_month),
      expire_year: parseInt(data.expire_year),
      name_on_card: data.name_on_card,
    };

    dispatch(saveCard(payload))
      .then(() => onClose())
      .catch((err) => alert("Kart kaydedilirken bir hata oluştu."));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-xl font-bold mb-6 text-slate-800">
          Yeni Kart Ekle
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Kart Üzerindeki İsim */}
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">
              Kart Üzerindeki İsim
            </label>
            <input
              {...register("name_on_card", {
                required: "Kart üzerindeki isim zorunludur",
                minLength: { value: 3, message: "En az 3 karakter olmalı" },
              })}
              className={`w-full p-3 border rounded-lg mt-1 outline-none transition-colors ${
                errors.name_on_card
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-200 focus:border-[#23A6F0]"
              }`}
              placeholder="Ad Soyad"
            />
            {errors.name_on_card && (
              <p className="text-red-500 text-[10px] mt-1 font-semibold">
                {errors.name_on_card.message}
              </p>
            )}
          </div>

          {/* Kart Numarası */}
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">
              Kart Numarası
            </label>
            <input
              {...register("card_no", {
                required: "Kart numarası zorunludur",
                pattern: {
                  value: /^[0-9\s]{16,19}$/,
                  message: "Geçerli bir kart numarası giriniz (16 hane)",
                },
              })}
              className={`w-full p-3 border rounded-lg mt-1 outline-none transition-colors ${
                errors.card_no
                  ? "border-red-500 focus:border-red-500"
                  : "border-slate-200 focus:border-[#23A6F0]"
              }`}
              placeholder="1234 1234 1234 1234"
              maxLength="19"
            />
            {errors.card_no && (
              <p className="text-red-500 text-[10px] mt-1 font-semibold">
                {errors.card_no.message}
              </p>
            )}
          </div>

          {/* Ay ve Yıl Yan Yana */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs font-bold text-slate-500 uppercase">
                Ay (MM)
              </label>
              <input
                type="number"
                {...register("expire_month", {
                  required: "AA",
                  min: { value: 1, message: "1-12 arası" },
                  max: { value: 12, message: "1-12 arası" },
                })}
                className={`w-full p-3 border rounded-lg mt-1 outline-none transition-colors ${
                  errors.expire_month
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-200 focus:border-[#23A6F0]"
                }`}
                placeholder="12"
              />
              {errors.expire_month && (
                <p className="text-red-500 text-[10px] mt-1 font-semibold">
                  {errors.expire_month.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label className="text-xs font-bold text-slate-500 uppercase">
                Yıl (YYYY)
              </label>
              <input
                type="number"
                {...register("expire_year", {
                  required: "YYYY",
                  min: { value: 2024, message: "Geçersiz yıl" },
                })}
                className={`w-full p-3 border rounded-lg mt-1 outline-none transition-colors ${
                  errors.expire_year
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-200 focus:border-[#23A6F0]"
                }`}
                placeholder="2025"
              />
              {errors.expire_year && (
                <p className="text-red-500 text-[10px] mt-1 font-semibold">
                  {errors.expire_year.message}
                </p>
              )}
            </div>
          </div>

          {/* Butonlar */}
          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 font-bold text-slate-500 hover:text-slate-700 transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-2 py-3 bg-[#23A6F0] text-white rounded-lg font-bold shadow-lg hover:bg-[#1a8cd3] active:scale-95 transition-all"
            >
              Kartı Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
