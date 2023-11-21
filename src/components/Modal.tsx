import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modalOverlay">
        <div className="modal">
          {/* Content */}
          <div className="modal__content">
            {/* Header */}
            <div className="modal__content__header">
              <h3>{title}</h3>
              <div className="closeButton" onClick={handleClose}>
                <FontAwesomeIcon icon={faX} size="lg" />
              </div>
            </div>
            {/* Body */}
            <div className="modal__content__body">{body}</div>
            {/* Footer */}
            <div className="modal__content__footer">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
