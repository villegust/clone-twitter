import React from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
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
          <li id="home">
            <Image
              src="/images/sidebar/home.svg"
              alt="Logo"
              width={25}
              height={25}
            />
            <span>Home</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/search.svg"
              alt="Explore"
              width={25}
              height={25}
            />
            <span>Explore</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/bell.svg"
              alt="Notifications"
              width={25}
              height={25}
            />
            <span>Notifications</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/message.svg"
              alt="Notifications"
              width={25}
              height={25}
            />
            <span>Messages</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/list.svg"
              alt="Notifications"
              width={25}
              height={25}
            />
            <span>Lists</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/bookmark.svg"
              alt="Notifications"
              width={25}
              height={25}
            />
            <span>Bookmarks</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/logo.svg"
              alt="Logo"
              width={20}
              height={20}
            />
            <span>Premium</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/profile.svg"
              alt="Logo"
              width={25}
              height={25}
            />
            <span>Profile</span>
          </li>
          <li>
            <Image
              src="/images/sidebar/more.svg"
              alt="Logo"
              width={25}
              height={25}
            />
            <span>More</span>
          </li>
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
