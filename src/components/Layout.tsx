import React, { useState, useEffect, ReactNode } from "react";

import { POST_DATA } from "../../data";
import { TREND_DATA } from "../../data";

import Sidebar from "@/components/layout/Sidebar";
import FollowBar from "@/components/layout/FollowBar";
import WriteMessage from "@/oldStuff/messagecomps/WriteMessage";
import NewMessage from "@/components/modals/NewMessage";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //global usestates
  const [pageName, setPageName] = useState<string>("");

  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [messageUser, setMessageUser] = useState("");

  const [temporaryUser, setTemporaryUser] = useState("");

  useEffect(() => {
    // Load pageName from local storage on the client side during component mount
    const storedPageName = localStorage.getItem("pageName");
    if (storedPageName) {
      setPageName(storedPageName);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever pageName changes
    localStorage.setItem("pageName", pageName);
  }, [pageName]);

  // useEffect(() => {
  //   const pathname = window.location.pathname;
  //   const pathSegments = pathname.split("/");
  //   const myParam = pathSegments[1];

  //   setPageName(myParam);
  // }, [pageName]);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="main">
      <div
        className={
          pageName === "message" ? "grid-layout-message" : "grid-layout "
        }
      >
        <Sidebar setPageName={setPageName} />

        <div className="main-content-borders">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              messageUser,
              setMessageUser,
            })
          )}
        </div>

        {pageName === "message" ? (
          <div className="message-section">
            {!messageUser ? (
              <div className="choose-message">
                <div className="choose-message__text">
                  <h1>Select a message</h1>
                  <p>
                    Choose from your existing calls, start a new one or swim
                    forward.
                  </p>
                  <div className="message-feed-content__btn">
                    <button onClick={handleModal}>New message</button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="messages-header">
                  <h2>{messageUser}</h2>
                </div>
                <WriteMessage pageName={pageName} />
              </>
            )}
          </div>
        ) : (
          <FollowBar
            POST_DATA={POST_DATA}
            TREND_DATA={TREND_DATA}
            pageName={pageName}
          />
        )}
      </div>
      {/* <NewMessage
        modalOpen={modalOpen}
        setExpanded={setExpanded}
        setModalOpen={setModalOpen}
        setMessageUser={setMessageUser}
        setTemporaryUser={setTemporaryUser}
      /> */}
    </div>
  );
};

export default Layout;
