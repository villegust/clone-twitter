"use client";

import React, { useEffect } from "react";

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when the modal is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset scrolling when the modal is unmounted
    };
  }, [modalOpen]);

  if (!modalOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modal">
        <button
          className="closeButton"
          onClick={() => {
            setModalOpen((prevModalOpen) => !prevModalOpen);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
