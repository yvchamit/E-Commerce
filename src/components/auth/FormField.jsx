export default function FormField({ label, error, registration, ...inputProps }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-[#252B42]">{label}</label>
      <input
        {...inputProps}
        {...registration}
        className={`p-3 border rounded-md bg-[#F9F9F9] focus:outline-[#23A6F0] ${
          error ? "border-red-500" : "border-[#ECECEC]"
        }`}
      />
      {error && (
        <p className="text-red-500 text-[12px] font-medium mt-1 px-2">
          {error.message}
        </p>
      )}
    </div>
  );
}