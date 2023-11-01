"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import IsMobile from "./isMobile/isMobile";

const Sidebar: React.FC = () => {
  const isMobile: boolean = IsMobile();

  const [selectedLink, setSelectedLink] = useState<string | null>(null);

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

  const handleLinkClick = (linkId: string) => {
    setSelectedLink(linkId);
    localStorage.setItem("selectedLink", linkId);
  };

  useEffect(() => {
    // Retrieve the selected link from local storage when the component mounts
    const storedSelectedLink = localStorage.getItem("selectedLink");
    if (storedSelectedLink) {
      setSelectedLink(storedSelectedLink);
    } else {
      // If the link doesn't exist or is invalid, you can clear the selected link
      setSelectedLink("");
      localStorage.removeItem("selectedLink");
    }
  }, []);

  return (
    <nav>
      {!isMobile ? (
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <Image
                src="/images/sidebar/logo.svg"
                alt="Logo"
                width={25}
                height={25}
              />
            </li>
            <Link className="links" href="/">
              <li onClick={() => handleLinkClick("/")}>
                <Image
                  src="/images/sidebar/home.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
                <span className={selectedLink === "/" ? "bold-link" : ""}>
                  Home
                </span>
              </li>
            </Link>

            <Link className="links" href="/explore">
              <li onClick={() => handleLinkClick("/explore")}>
                <Image
                  src="/images/sidebar/search.svg"
                  alt="Explore"
                  width={25}
                  height={25}
                />
                <span
                  className={selectedLink === "/explore" ? "bold-link" : ""}
                >
                  Explore
                </span>
              </li>
            </Link>

            <Link className="links" href="/notifications">
              <li onClick={() => handleLinkClick("/notifications")}>
                <Image
                  src="/images/sidebar/bell.svg"
                  alt="Notifications"
                  width={25}
                  height={25}
                />
                <span
                  className={
                    selectedLink === "/notifications" ? "bold-link" : ""
                  }
                >
                  Notifications
                </span>
              </li>
            </Link>

            <Link className="links" href="/message">
              <li onClick={() => handleLinkClick("/message")}>
                <Image
                  src="/images/sidebar/message.svg"
                  alt="Notifications"
                  width={25}
                  height={25}
                />
                <span>Messages</span>
              </li>
            </Link>

            <Link className="links" href="/lists">
              <li onClick={() => handleLinkClick("/lists")}>
                <Image
                  src="/images/sidebar/list.svg"
                  alt="Notifications"
                  width={25}
                  height={25}
                />
                <span>Lists</span>
              </li>
            </Link>

            <Link className="links" href="/bookmarks">
              <li onClick={() => handleLinkClick("/bookmarks")}>
                <Image
                  src="/images/sidebar/bookmark.svg"
                  alt="Notifications"
                  width={25}
                  height={25}
                />
                <span>Bookmarks</span>
              </li>
            </Link>

            <Link className="links" href="/groups">
              <li onClick={() => handleLinkClick("/groups")}>
                <Image
                  src="/images/sidebar/groups.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
                <span>Groups</span>
              </li>
            </Link>

            <Link className="links" href="/premium">
              <li onClick={() => handleLinkClick("/premium")}>
                <Image
                  src="/images/sidebar/logo.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
                <span>Premium</span>
              </li>
            </Link>

            <Link className="links" href="/profile">
              <li onClick={() => handleLinkClick("/profile")}>
                <Image
                  src="/images/sidebar/profile.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
                <span>Profile</span>
              </li>
            </Link>

            <Link className="links" href="/more">
              <li onClick={() => handleLinkClick("/more")}>
                <Image
                  src="/images/sidebar/more.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
                <span>More</span>
              </li>
            </Link>
            {!is1280px ? (
              <button>Make a post</button>
            ) : (
              <button>
                <Image
                  src="/images/sidebar/makePost.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
              </button>
            )}

            <div className="profile">
              <div className="profile__content">
                <Image
                  src="/images/sidebar/profile.png"
                  alt="Logo"
                  width={40}
                  height={35}
                />
                <div className="profile__content__text">
                  <h6>Name</h6>
                  <p>@Username</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faEllipsis} size="xl" />
            </div>
          </ul>
        </div>
      ) : (
        <div className="mobile-navbar">
          <div className="mobile-navbar-menu">
            <div className="mobile-navbar-menu__icons">
              <Link className="mobile-navbar-menu__icons" href="/">
                <div onClick={() => handleLinkClick("/")}>
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
                <div onClick={() => handleLinkClick("/explore")}>
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
                <div onClick={() => handleLinkClick("/notifications")}>
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
                <div onClick={() => handleLinkClick("/message")}>
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
    </nav>
  );
};

export default Sidebar;
