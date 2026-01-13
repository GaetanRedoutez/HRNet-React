export const DateSelect = ({ label, name, max, min, required = false }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type="date"
        max={max}
        min={min}
        required={required}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-blue-500"
      />
    </div>
  );
};
