/**
 * Toast component to display a notification message with a specific type.
 *
 * @param {Object} props - The props object.
 * @param {'success' | 'error' | 'info'} props.type - The type of the toast, determines the background color.
 * @param {string} props.message - The message to display inside the toast.
 * @returns {JSX.Element} A styled toast notification component.
 */
export const Toast = ({ type, message }) => {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className={`rounded px-4 py-2 text-white shadow ${colors[type]}`}>
      {message}
    </div>
  );
};
