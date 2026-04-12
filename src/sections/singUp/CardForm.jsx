import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getYear } from "date-fns";
import { saveCard } from "../../store/actions/paymentActions";

const CardForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      expire_month: "",
      expire_year: "",
    },
  });

  const dispatch = useDispatch();

  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const currentYear = getYear(new Date());
  const years = Array.from({ length: 15 }, (_, i) => currentYear + i);

  const handleCardNoChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    let formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setValue("card_no", formattedValue);
  };

  const onSubmit = (data) => {
    const payload = {
      card_no: data.card_no.replace(/\s/g, ""),
      expire_month: parseInt(data.expire_month),
      expire_year: parseInt(data.expire_year),
      name_on_card: data.name_on_card,
    };

    dispatch(saveCard(payload))
      .then(() => onClose())
      .catch(() => alert("Kart kaydedilirken bir hata oluştu."));
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
        <h2 className="text-xl font-bold mb-6 text-slate-800 text-center">
          Yeni Kart Ekle
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kart Üzerindeki İsim
            </label>
            <input
              {...register("name_on_card", {
                required: "İsim zorunludur",
                minLength: { value: 3, message: "En az 3 karakter" },
              })}
              className={`w-full p-3 border rounded-lg mt-1 outline-none transition-all ${
                errors.name_on_card
                  ? "border-red-500"
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

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Kart Numarası
            </label>
            <input
              {...register("card_no", {
                required: "Kart numarası zorunludur",
                pattern: {
                  value: /^[\d\s]{19}$/,
                  message: "16 haneli kart numarasını tamamlayın",
                },
              })}
              onChange={handleCardNoChange}
              maxLength="19"
              className={`w-full p-3 border rounded-lg mt-1 outline-none font-mono transition-all ${
                errors.card_no
                  ? "border-red-500"
                  : "border-slate-200 focus:border-[#23A6F0]"
              }`}
              placeholder="0000 0000 0000 0000"
            />
            {errors.card_no && (
              <p className="text-red-500 text-[10px] mt-1 font-semibold">
                {errors.card_no.message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Ay
              </label>
              <select
                {...register("expire_month", { required: "Seçiniz" })}
                className={`w-full p-3 border rounded-lg mt-1 outline-none bg-white cursor-pointer ${
                  errors.expire_month
                    ? "border-red-500"
                    : "border-slate-200 focus:border-[#23A6F0]"
                }`}
              >
                <option value="" disabled>
                  AA
                </option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Yıl
              </label>
              <select
                {...register("expire_year", { required: "Seçiniz" })}
                className={`w-full p-3 border rounded-lg mt-1 outline-none bg-white cursor-pointer ${
                  errors.expire_year
                    ? "border-red-500"
                    : "border-slate-200 focus:border-[#23A6F0]"
                }`}
              >
                <option value="" disabled>
                  YYYY
                </option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex-2 py-3 bg-[#23A6F0] text-white rounded-lg font-bold shadow-md hover:bg-[#1a8cd3] active:scale-95 transition-all"
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