import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import IsMobile from "../isMobile/IsMobile";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = ({ setPageName }: any) => {
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
      // alert: currentUser?.hasNotification,
    },
    {
      icon: FaUser,
      label: "Profile",
      // href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ];

  return (
    <>
      {!isMobile ? (
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
            </div>
          </div>
        </div>
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
    // <nav>
    //   {!isMobile ? (
    //     <div className="sidebar">
    //       <ul className="sidebar-menu">
    //         <li>
    //           <Image
    //             src="/images/sidebar/logo.svg"
    //             alt="Logo"
    //             width={25}
    //             height={25}
    //           />
    //         </li>
    //         <Link className="links" href="/">
    //           <li
    //             onClick={() => {
    //               setPageName("/");
    //             }}
    //           >
    //             <Image
    //               src="/images/sidebar/home.svg"
    //               alt="Logo"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Home</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/explore">
    //           <li
    //             onClick={() => {
    //               setPageName("explore");
    //             }}
    //           >
    //             <Image
    //               src="/images/sidebar/search.svg"
    //               alt="Explore"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Explore</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/notifications">
    //           <li
    //             onClick={() => {
    //               setPageName("notifications");
    //             }}
    //           >
    //             <Image
    //               src="/images/sidebar/bell.svg"
    //               alt="Notifications"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Notifications</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/message">
    //           <li
    //             onClick={() => {
    //               setPageName("message");
    //             }}
    //           >
    //             <Image
    //               src="/images/sidebar/message.svg"
    //               alt="Message"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Messages</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/lists">
    //           <li>
    //             <Image
    //               src="/images/sidebar/list.svg"
    //               alt="Notifications"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Lists</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/bookmarks">
    //           <li>
    //             <Image
    //               src="/images/sidebar/bookmark.svg"
    //               alt="Notifications"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Bookmarks</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/groups">
    //           <li>
    //             <Image
    //               src="/images/sidebar/groups.svg"
    //               alt="Logo"
    //               width={20}
    //               height={20}
    //             />
    //             <span>Groups</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/premium">
    //           <li>
    //             <Image
    //               src="/images/sidebar/logo.svg"
    //               alt="Logo"
    //               width={20}
    //               height={20}
    //             />
    //             <span>Premium</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/profile">
    //           <li>
    //             <Image
    //               src="/images/sidebar/profile.svg"
    //               alt="Logo"
    //               width={25}
    //               height={25}
    //             />
    //             <span>Profile</span>
    //           </li>
    //         </Link>

    //         <Link className="links" href="/more">
    //           <li>
    //             <Image
    //               src="/images/sidebar/more.svg"
    //               alt="Logo"
    //               width={25}
    //               height={25}
    //             />
    //             <span>More</span>
    //           </li>
    //         </Link>
    //         {!is1280px ? (
    //           <button>Make a post</button>
    //         ) : (
    //           <button>
    //             <Image
    //               src="/images/sidebar/makePost.svg"
    //               alt="Logo"
    //               width={25}
    //               height={25}
    //             />
    //           </button>
    //         )}
    //         {is1280px ? (
    //           <div className="profile">
    //             <div className="profile__content">
    //               <Image
    //                 src="/images/sidebar/profile.png"
    //                 alt="Logo"
    //                 width={40}
    //                 height={35}
    //               />
    //             </div>
    //           </div>
    //         ) : (
    //           <div className="profile">
    //             <div className="profile__content">
    //               <Image
    //                 src="/images/sidebar/profile.png"
    //                 alt="Logo"
    //                 width={40}
    //                 height={35}
    //               />
    //               <div className="profile__content__text">
    //                 <h6>Name</h6>
    //                 <p>@Username</p>
    //               </div>
    //             </div>
    //             <FontAwesomeIcon icon={faEllipsis} size="xl" />
    //           </div>
    //         )}
    //       </ul>
    //     </div>
    //   ) : (
    //     <div className="mobile-navbar">
    //       <div className="mobile-navbar-menu">
    //         <div className="mobile-navbar-menu__icons">
    //           <Link className="mobile-navbar-menu__icons" href="/">
    //             <div>
    //               <Image
    //                 src="/images/sidebar/home.svg"
    //                 alt="Logo"
    //                 width={25}
    //                 height={25}
    //               />
    //             </div>
    //           </Link>
    //         </div>

    //         <div className="mobile-navbar-menu__icons">
    //           <Link href="/explore">
    //             <div>
    //               <Image
    //                 src="/images/sidebar/search.svg"
    //                 alt="Logo"
    //                 width={25}
    //                 height={25}
    //               />
    //             </div>
    //           </Link>
    //         </div>
    //         <div className="mobile-navbar-menu__icons">
    //           <Link className="mobile-navbar-menu__icons" href="/notifications">
    //             <div>
    //               <Image
    //                 src="/images/sidebar/bell.svg"
    //                 alt="Logo"
    //                 width={25}
    //                 height={25}
    //               />
    //             </div>
    //           </Link>
    //         </div>

    //         <div className="mobile-navbar-menu__icons">
    //           <Link className="mobile-navbar-menu__icons" href="/message">
    //             <div>
    //               <Image
    //                 src="/images/sidebar/message.svg"
    //                 alt="Logo"
    //                 width={25}
    //                 height={25}
    //               />
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
};

export default Sidebar;
