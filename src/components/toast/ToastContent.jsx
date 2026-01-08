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
