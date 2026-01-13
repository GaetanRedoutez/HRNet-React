export const Select = ({ label, name, options = [], required = false }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-blue-500"
      >
        <option value="">Select {label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};
