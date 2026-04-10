import { useForm } from "react-hook-form";
import { cities } from "../../lib/cityTurkiye";

const AddressForm = ({ onSubmit, onCancel, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {},
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-[#252B42]">
          {initialData ? "Adresi Güncelle" : "Yeni Adres Ekle"}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Address Title */}
          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">
              Address Title*
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              placeholder="e.g. Home, Work"
              className="w-full p-2 border rounded-md"
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Name*</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Surname*</label>
            <input
              {...register("surname", { required: "Surname is required" })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Phone*</label>
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: "Invalid phone number",
                },
              })}
              placeholder="05xxxxxxxxx"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* City - Dropdown */}
          <div>
            <label className="block text-sm font-bold mb-1">City*</label>
            <select
              {...register("city", { required: "City is required" })}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-bold mb-1">District*</label>
            <input
              {...register("district", { required: "District is required" })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Neighborhood */}
          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">
              Neighborhood*
            </label>
            <input
              {...register("neighborhood", {
                required: "Neighborhood is required",
              })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Address Detail (Multiline) */}
          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">
              Address Detail*
            </label>
            <textarea
              {...register("address", {
                required: "Address detail is required",
              })}
              className="w-full p-2 border rounded-md h-24"
              placeholder="Street, building and door number..."
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 text-gray-500 font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#23A6F0] text-white rounded-md font-bold hover:bg-[#1a8cd3]"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
