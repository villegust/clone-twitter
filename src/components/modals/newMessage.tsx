import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<ModalProps> = ({
  modalOpen,
  setExpanded,
  setModalOpen,
  setMessageUser,
}) => {
  const [selectedUser, setSelectedUser] = useState("");

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

  const handleNextBtn = () => {
    setMessageUser(selectedUser);
    setExpanded(true);
    setModalOpen(false);
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <div className="modal__header">
          <div className="modal__header__title">
            <div
              className="closeButton"
              onClick={() => {
                setModalOpen((prevModalOpen) => !prevModalOpen);
              }}
            >
              <FontAwesomeIcon icon={faX} size="xl" />
            </div>
            <h2>New message</h2>
          </div>
          <div className="modal__header__btn">
            <button
              className={!selectedUser ? "notActiveNextBtn" : "activeNextBtn"}
              onClick={handleNextBtn}
            >
              Next
            </button>
          </div>
        </div>
        <div className="search-bar1">
          <div className="search-icon1">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </div>
          <input
            value={selectedUser}
            type="text"
            placeholder="Find people"
            onChange={(e) => {
              setSelectedUser(e.target.value);
            }}
          />
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
