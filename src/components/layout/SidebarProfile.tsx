import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLogoutModal from "@/hooks/useLogoutModal";

const SidebarProfile = () => {
  const { data: currentUser } = useCurrentUser();

  const logoutModal = useLogoutModal();

  const handleOnClick = () => {
    console.log(logoutModal.isOpen);
    if (logoutModal.isOpen === false) {
      logoutModal.onOpen();
    } else {
      logoutModal.onClose();
    }
  };
  return (
    <>
      {currentUser && (
        <div className="profile" onClick={handleOnClick}>
          <div className="profile__content">
            <Image
              src="/images/sidebar/profile.png"
              alt="Logo"
              width={40}
              height={35}
            />
            <div className="profile__content__text">
              <h6>{currentUser.name}</h6>
              <p>@{currentUser.username}</p>
            </div>
          </div>
          <FontAwesomeIcon id="ellipsis" icon={faEllipsis} size="xl" />
        </div>
      )}
    </>
  );
};

export default SidebarProfile;
