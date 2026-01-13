export const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  minLength,
  maxLength,
  pattern,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-blue-500"
      />
    </div>
  );
};
