import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SidebarProfileModal: React.FC<SidebarProfileProps> = ({
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
      <div className="profile-modal">
        {/* Content */}
        <div className="profile-modal__content">
          {/* Body */}
          <div className="profile-modal__content__body">{body}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarProfileModal;
