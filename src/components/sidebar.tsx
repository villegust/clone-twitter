"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

const Sidebar: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (linkId: string) => {
    setSelectedLink(linkId);
    localStorage.setItem("selectedLink", linkId);
  };

  useEffect(() => {
    // Retrieve the selected link from local storage when the component mounts
    const storedSelectedLink = localStorage.getItem("selectedLink");
    if (storedSelectedLink) {
      setSelectedLink(storedSelectedLink);
    }
  }, []);

  return (
    <nav>
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
              <span className={selectedLink === "/explore" ? "bold-link" : ""}>
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
                className={selectedLink === "/notifications" ? "bold-link" : ""}
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

          <button>Make a post</button>

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
                <p>Username</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
