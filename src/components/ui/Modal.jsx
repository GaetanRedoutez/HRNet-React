/**
 * A reusable Modal component that renders its children inside a modal dialog.
 * The modal includes a backdrop and can be closed by clicking outside the content area.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal.
 * @param {Function} props.onClose - The callback function to be invoked when the modal is closed.
 */
export const Modal = ({ children, onClose }) => {
  return (
    <div
      className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded bg-white p-6 opacity-100 shadow-lg"
      >
        {children}
      </div>
    </div>
  );
};
