import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="modal__header">
          <h2>New message</h2>
          <div
            className="closeButton"
            onClick={() => {
              setModalOpen((prevModalOpen) => !prevModalOpen);
            }}
          >
            <FontAwesomeIcon icon={faX} size="xl" />
          </div>
        </div>
        <div className="search-bar1">
          <div className="search-icon1">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </div>
          <input type="text" placeholder="Find people" />
        </div>
        <div className="create-group">
          <div className="create-group__icon">
            <FontAwesomeIcon icon={faUsers} size="xl" />
          </div>
          <div className="create-group__text">
            <p>Create a group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
