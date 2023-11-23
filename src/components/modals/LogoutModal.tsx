import ProfileModal from "@/components/SidebarProfileModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLogoutModal from "@/hooks/useLogoutModal";

import { signOut } from "next-auth/react";

const LogoutModal = () => {
  const logoutModal = useLogoutModal();
  const { data: currentUser } = useCurrentUser();

  const bodyContent = (
    <>
      {currentUser && (
        <div className="logout-box">
          <div className="logout-box__text">
            <p>Add already existing account</p>
          </div>
          <div className="logout-box__text" onClick={() => signOut()}>
            <p>Log out from @{currentUser.username}</p>
          </div>
        </div>
      )}
    </>
  );

  return (
    <ProfileModal
      isOpen={logoutModal.isOpen}
      onClose={logoutModal.onClose}
      body={bodyContent}
    />
  );
};

export default LogoutModal;
