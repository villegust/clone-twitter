import ProfileModal from "@/components/LogoutModal";
import useLogoutModal from "@/hooks/useLogoutModal";

const LogoutModal = () => {
  const logoutModal = useLogoutModal();

  const bodyContent = <div></div>;

  return (
    <ProfileModal
      isOpen={logoutModal.isOpen}
      onClose={logoutModal.onClose}
      body={bodyContent}
    />
  );
};

export default LogoutModal;
