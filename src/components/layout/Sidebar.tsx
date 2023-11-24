import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import IsMobile from "../../oldStuff/isMobile/IsMobile";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const isMobile: boolean = IsMobile();

  const [is1280px, setis1280px] = useState<boolean>(false);

  useEffect(() => {
    const checkIs1280px = () => {
      setis1280px(window.innerWidth < 1280);
    };

    // Initial check
    checkIs1280px();

    // Add event listener for window resize
    window.addEventListener("resize", checkIs1280px);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIs1280px);
    };
  }, []);

  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
    },
    {
      icon: FaUser,
      label: "Profile",
      href: "/users/123",
      auth: true,
    },
  ];

  return (
    <>
      {!isMobile ? (
        <nav>
          <div className="sidebar">
            <div className="sidebar-menu">
              <div className="sidebar-menu__test">
                <SidebarLogo />
                {items.map((item, index) => (
                  <SidebarItem
                    key={index}
                    // alert={item.alert}
                    auth={item.auth}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
                <SidebarTweetButton />
                <SidebarProfile />
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div className="mobile-navbar">
          <div className="mobile-navbar-menu">
            <div className="mobile-navbar-menu__icons">
              <Link className="mobile-navbar-menu__icons" href="/">
                <div>
                  <Image
                    src="/images/sidebar/home.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </Link>
            </div>
            <div className="mobile-navbar-menu__icons">
              <Link href="/explore">
                <div>
                  <Image
                    src="/images/sidebar/search.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </Link>
            </div>
            <div className="mobile-navbar-menu__icons">
              <Link className="mobile-navbar-menu__icons" href="/notifications">
                <div>
                  <Image
                    src="/images/sidebar/bell.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </Link>
            </div>
            <div className="mobile-navbar-menu__icons">
              <Link className="mobile-navbar-menu__icons" href="/message">
                <div>
                  <Image
                    src="/images/sidebar/message.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
