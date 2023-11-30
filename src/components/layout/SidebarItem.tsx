import React, { useCallback, useState } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

import { BsDot } from "react-icons/bs";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  auth,
  onClick,
  alert,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, auth, loginModal, onClick, currentUser]);

  return (
    <div className="sidebar-item" onClick={handleClick}>
      <div className="sidebar-item__icon">
        <Icon size={28} color="white" />
        {alert ? <BsDot className="dot" size={70} /> : null}
      </div>
      <div className="sidebar-item__test">
        <Icon size={24} color="white" />
        <p>{label}</p>
        {alert ? <BsDot className="dot" size={70} /> : null}
      </div>
    </div>
  );
};

export default SidebarItem;
