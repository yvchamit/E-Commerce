
export const inputClass = (hasError) =>
  `w-full p-2 border rounded-md outline-none transition-colors ${
    hasError ? "border-red-500" : "border-slate-200 focus:border-[#23A6F0]"
  }`;

const FormField = ({
  label,
  htmlFor,
  required = false,
  error,
  className = "",
  children,
}) => (
  <div className={className}>
    <label htmlFor={htmlFor} className="block text-sm font-bold mb-1">
      {label}
      {required && "*"}
    </label>
    {children}
    {error && (
      <span role="alert" className="text-red-500 text-xs">
        {error.message}
      </span>
    )}
  </div>
);

export default FormField;
