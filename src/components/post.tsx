import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faRepeat,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

const Post = ({ POST_DATA }: any) => {
  return (
    <section className="post-section">
      {POST_DATA.map((items: Data, index: number) => {
        return (
          <div className="post-content" key={index}>
            <div className="post-content__top">
              <div className="post-content__top__image">
                <Image
                  src="/images/sidebar/profile.png"
                  alt="Logo"
                  width={40}
                  height={35}
                />
              </div>
              <div className="post-content__top__text">
                <div className="post-content__top__text__profile">
                  <h3>{items.name}</h3>
                  <p>
                    @{items.username} · {items.posted}
                  </p>
                </div>
                <h4> {items.postText} </h4>
              </div>
            </div>
            <div className="post-content__post-img">
              <img src={items.postImg} alt="test" />
            </div>
            <div className="post-content__like-and-share">
              <div className="post-content__like-and-share__icons">
                <FontAwesomeIcon icon={faComment} size="lg" />
                {items.comments >= 1000000
                  ? (items.comments / 1000000).toFixed(0) + " mn"
                  : items.comments >= 1000
                  ? (items.comments / 1000).toFixed(0) + " tn"
                  : items.comments}
              </div>
              <div className="post-content__like-and-share__icons">
                <FontAwesomeIcon icon={faRepeat} rotation={90} size="lg" />
                {items.reposts >= 1000000
                  ? (items.reposts / 1000000).toFixed(0) + " mn"
                  : items.reposts >= 1000
                  ? (items.reposts / 1000).toFixed(0) + " tn"
                  : items.reposts}
              </div>

              <div className="post-content__like-and-share__icons">
                <FontAwesomeIcon icon={faHeart} size="lg" />
                {items.likes >= 1000000
                  ? (items.likes / 1000000).toFixed(0) + " mn"
                  : items.likes >= 1000
                  ? (items.likes / 1000).toFixed(0) + " tn"
                  : items.likes}
              </div>

              <div className="post-content__like-and-share__icons">
                <FontAwesomeIcon icon={faChartSimple} size="lg" />
                {items.views >= 1000000
                  ? (items.views / 1000000).toFixed(0) + " mn"
                  : items.views >= 1000
                  ? (items.views / 1000).toFixed(0) + " tn"
                  : items.views}
              </div>

              <div className="post-content__like-and-share__bookmark">
                <div className="post-content__like-and-share__bookmark__icons">
                  <FontAwesomeIcon icon={faBookmark} size="lg" />
                </div>
                <div className="post-content__like-and-share__bookmark__icons">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Post;
