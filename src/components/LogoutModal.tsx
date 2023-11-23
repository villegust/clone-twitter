import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<SidebarProfileProps> = ({
  isOpen,
  onClose,
  body,
  disabled,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modalOverlay">
        <div className="modal">
          {/* Content */}
          <div className="modal__content">
            {/* Body */}
            <div className="modal__content__body">{body}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
