import React from "react";

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
