"use client";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const MessageBox = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {!expanded ? (
        <div className="message-box" onClick={handleExpandClick}>
          <div className="message-box__content-top">
            <h1>Messages</h1>
            <div className="message-box__content-top__icons">
              <span className="icon" onClick={handleExpandClick}>
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
              </span>
              <span className="icon" onClick={handleExpandClick}>
                <FontAwesomeIcon icon={faAnglesUp} size="2xl" />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="message-container">
          <div className="message-box-extended" onClick={handleExpandClick}>
            <div className="content">
              <div className="message-box__content-top">
                <h1>Messages</h1>
                <div className="message-box__content-top__icons">
                  <span className="icon" onClick={handleExpandClick}>
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                  </span>
                  <span className="icon" onClick={handleExpandClick}>
                    <FontAwesomeIcon icon={faAnglesDown} size="2xl" />
                  </span>
                </div>
              </div>
            </div>
            <div className="message-request">Message request</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
