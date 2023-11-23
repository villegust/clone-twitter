import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";

// import useLoginModal from "@/hooks/useLoginModal";
// import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  //   const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    // loginModal.onOpen();
  }, []);

  return (
    <div className="button-align" onClick={onClick}>
      <div className="tweet-button">
        <FaFeather size={24} color="white" />
      </div>
      <div className="tweet-text">
        <p>Tweet</p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
