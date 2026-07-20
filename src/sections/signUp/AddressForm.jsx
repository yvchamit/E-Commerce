import { Controller, useForm } from "react-hook-form";
import { cities } from "../../lib/cityTurkiye";
import FormField, { inputClass } from "../../components/ui/FormField";
import Modal from "../../components/ui/Modal";

const formatPhone = (value) => {
  const d = (value || "").replace(/\D/g, "").replace(/^0/, "").slice(0, 10);
  if (!d) return "";
  if (d.length < 4) return `0 (${d}`;
  if (d.length < 7) return `0 (${d.slice(0, 3)}) ${d.slice(3)}`;
  if (d.length < 9) return `0 (${d.slice(0, 3)}) ${d.slice(3, 6)} ${d.slice(6)}`;
  return `0 (${d.slice(0, 3)}) ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}`;
};

const AddressForm = ({ onSubmit, onCancel, initialData }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData ?? {},
  });

  return (
    <Modal
      title={initialData ? "Adresi Güncelle" : "Yeni Adres Ekle"}
      onClose={onCancel}
      size="lg"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <FormField
          label="Adres Başlığı"
          htmlFor="title"
          required
          error={errors.title}
          className="md:col-span-2"
        >
          <input
            id="title"
            {...register("title", { required: "Başlık zorunludur" })}
            placeholder="örn. Ev, İş"
            className={inputClass(!!errors.title)}
            aria-invalid={!!errors.title}
          />
        </FormField>

        <FormField label="Ad" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            {...register("name", { required: "Ad zorunludur" })}
            className={inputClass(!!errors.name)}
            aria-invalid={!!errors.name}
          />
        </FormField>

        <FormField
          label="Soyad"
          htmlFor="surname"
          required
          error={errors.surname}
        >
          <input
            id="surname"
            {...register("surname", { required: "Soyad zorunludur" })}
            className={inputClass(!!errors.surname)}
            aria-invalid={!!errors.surname}
          />
        </FormField>

        <FormField label="Telefon" htmlFor="phone" required error={errors.phone}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Telefon zorunludur",
              validate: (v) => {
                const len = (v || "").replace(/\D/g, "").length;
                return len === 10 || "Geçersiz telefon numarası";
              },
            }}
            render={({ field }) => (
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="0 (5xx) xxx xx xx"
                value={formatPhone(field.value)}
                onChange={(e) =>
                  field.onChange(
                    e.target.value.replace(/\D/g, "").replace(/^0/, "").slice(0, 10)
                  )
                }
                className={inputClass(!!errors.phone)}
                aria-invalid={!!errors.phone}
              />
            )}
          />
        </FormField>

        <FormField label="İl" htmlFor="city" required error={errors.city}>
          <select
            id="city"
            {...register("city", { required: "İl zorunludur" })}
            className={`${inputClass(!!errors.city)} bg-white cursor-pointer`}
            aria-invalid={!!errors.city}
          >
            <option value="">İl seçiniz</option>
            {cities.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="İlçe"
          htmlFor="district"
          required
          error={errors.district}
        >
          <input
            id="district"
            {...register("district", { required: "İlçe zorunludur" })}
            className={inputClass(!!errors.district)}
            aria-invalid={!!errors.district}
          />
        </FormField>

        <FormField
          label="Mahalle"
          htmlFor="neighborhood"
          required
          error={errors.neighborhood}
          className="md:col-span-2"
        >
          <input
            id="neighborhood"
            {...register("neighborhood", { required: "Mahalle zorunludur" })}
            className={inputClass(!!errors.neighborhood)}
            aria-invalid={!!errors.neighborhood}
          />
        </FormField>

        <FormField
          label="Adres Detayı"
          htmlFor="address"
          required
          error={errors.address}
          className="md:col-span-2"
        >
          <textarea
            id="address"
            {...register("address", { required: "Adres detayı zorunludur" })}
            className={`${inputClass(!!errors.address)} h-24`}
            placeholder="Sokak, bina ve kapı numarası..."
            aria-invalid={!!errors.address}
          />
        </FormField>

        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 text-gray-500 font-bold"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#23A6F0] text-white rounded-md font-bold hover:bg-[#1a8cd3]"
          >
            Adresi Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddressForm;