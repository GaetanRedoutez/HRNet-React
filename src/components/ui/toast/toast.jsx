import { createRoot } from "react-dom/client";
import { Toast } from "./ToastContent";

let container;

function getContainer() {
  if (!container) {
    container = document.createElement("div");
    container.className = "fixed top-4 right-4 z-50 flex flex-col gap-2";
    document.body.appendChild(container);
  }
  return container;
}

function showToast(type, message, duration = 3000) {
  const toastEl = document.createElement("div");

  toastEl.className =
    "opacity-0 -translate-x-2 transition-all duration-200 ease-out";

  getContainer().appendChild(toastEl);

  const root = createRoot(toastEl);
  root.render(<Toast type={type} message={message} />);

  requestAnimationFrame(() => {
    toastEl.classList.remove("opacity-0", "-translate-x-2");
    toastEl.classList.add("opacity-100", "translate-x-0");
  });

  setTimeout(() => {
    toastEl.classList.remove("opacity-100", "translate-x-0");
    toastEl.classList.add("opacity-0", "-translate-x-2");

    setTimeout(() => {
      root.unmount();
      toastEl.remove();
    }, 200);
  }, duration);
}

/**
 * An object containing methods to display different types of toast notifications.
 *
 * @property {Function} success - Displays a success toast notification.
 * @param {string} message - The message to display in the success toast.
 *
 * @property {Function} error - Displays an error toast notification.
 * @param {string} message - The message to display in the error toast.
 *
 * @property {Function} info - Displays an informational toast notification.
 * @param {string} message - The message to display in the informational toast.
 */
export const toast = {
  success: (message) => showToast("success", message),
  error: (message) => showToast("error", message),
  info: (message) => showToast("info", message),
};
