import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getYear } from "date-fns";
import { saveCard } from "../../store/actions/paymentActions";
import FormField, { inputClass } from "../../components/ui/FormField";
import Modal from "../../components/ui/Modal";

const luhnValid = (num) => {
  let sum = 0;
  let alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num[i], 10);
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
};

const CardForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name_on_card: "",
      card_no: "",
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
    const digits = e.target.value.replace(/\D/g, "");
    setValue("card_no", digits.replace(/(\d{4})(?=\d)/g, "$1 "));
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
      .catch((error) => {
        if (error?.response?.status === 409) {
          alert("Bu kart zaten kayıtlı.");
        } else {
          alert("Kart kaydedilirken bir hata oluştu.");
        }
      });
  };

  return (
    <Modal title="Yeni Kart Ekle" onClose={onClose} size="md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
      >
        <FormField
          label="Kart Üzerindeki İsim"
          htmlFor="name_on_card"
          required
          error={errors.name_on_card}
        >
          <input
            id="name_on_card"
            {...register("name_on_card", {
              required: "İsim zorunludur",
              minLength: { value: 3, message: "En az 3 karakter" },
              onChange: (e) =>
                setValue(
                  "name_on_card",
                  e.target.value.toLocaleUpperCase("tr-TR"),
                ),
            })}
            className={`${inputClass(!!errors.name_on_card)} uppercase`}
            placeholder="AD SOYAD"
            aria-invalid={!!errors.name_on_card}
          />
        </FormField>

        <FormField
          label="Kart Numarası"
          htmlFor="card_no"
          required
          error={errors.card_no}
        >
          <input
            id="card_no"
            {...register("card_no", {
              required: "Kart numarası zorunludur",
              validate: (v) => {
                const d = (v || "").replace(/\D/g, "");
                if (d.length !== 16) return "16 haneli kart numarasını girin";
                if (/^(\d)\1{15}$/.test(d)) return "Geçersiz kart numarası";
                //if (!luhnValid(d)) return "Geçersiz kart numarası";
                return true;
              },
            })}
            onChange={handleCardNoChange}
            maxLength="19"
            inputMode="numeric"
            className={`${inputClass(!!errors.card_no)} font-mono`}
            placeholder="0000 0000 0000 0000"
            aria-invalid={!!errors.card_no}
          />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Ay" htmlFor="expire_month" required>
            <select
              id="expire_month"
              {...register("expire_month", {
                required: "Seçiniz",
                onChange: () => trigger("expire_year"),
              })}
              className={`${inputClass(!!errors.expire_month)} bg-white cursor-pointer`}
              aria-invalid={!!errors.expire_month}
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
          </FormField>

          <FormField label="Yıl" htmlFor="expire_year" required>
            <select
              id="expire_year"
              {...register("expire_year", {
                required: "Seçiniz",
                validate: (value, formValues) => {
                  if (!value || !formValues.expire_month) return true;
                  const now = new Date();
                  const y = parseInt(value);
                  const m = parseInt(formValues.expire_month);
                  const isPast =
                    y < now.getFullYear() ||
                    (y === now.getFullYear() && m < now.getMonth() + 1);
                  return !isPast || "Son kullanma tarihi geçmiş";
                },
                onChange: () => trigger("expire_year"),
              })}
              className={`${inputClass(!!errors.expire_year)} bg-white cursor-pointer`}
              aria-invalid={!!errors.expire_year}
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
          </FormField>
        </div>

        {(errors.expire_month || errors.expire_year) && (
          <span role="alert" className="text-red-500 text-xs -mt-2">
            {errors.expire_year?.message || errors.expire_month?.message}
          </span>
        )}

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-gray-500 font-bold"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#23A6F0] text-white rounded-md font-bold hover:bg-[#1a8cd3]"
          >
            Kartı Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CardForm;
