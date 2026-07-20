import { useEffect, useRef } from "react";

const SIZES = {
  md: "max-w-md",
  lg: "max-w-2xl",
};

const Modal = ({ title, onClose, size = "lg", children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const focusable = contentRef.current?.querySelector(
      "input, select, textarea, button"
    );
    focusable?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`bg-white rounded-lg p-8 w-full ${SIZES[size]} max-h-[90vh] overflow-y-auto shadow-2xl`}
      >
        {title && (
          <h2
            id="modal-title"
            className="text-2xl font-bold mb-6 text-[#252B42]"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
