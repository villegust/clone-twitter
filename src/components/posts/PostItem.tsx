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

const PostItem = ({
  name,
  username,
  postText,
  postImg,
  posted,
  comments,
  reposts,
  likes,
  views,
}: any) => {
  return (
    <div className="post-content">
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
            <h3>{name}</h3>
            <p>
              @{username} · {posted}
            </p>
          </div>
          <h4> {postText} </h4>
        </div>
      </div>
      <div className="post-content__post-img">
        <img src={postImg} alt="test" />
      </div>
      <div className="post-content__like-and-share">
        <div className="post-content__like-and-share__icons">
          <FontAwesomeIcon icon={faComment} size="lg" />
          {comments >= 1000000
            ? (comments / 1000000).toFixed(0) + " mn"
            : comments >= 1000
            ? (comments / 1000).toFixed(0) + " tn"
            : comments}
        </div>
        <div className="post-content__like-and-share__icons">
          <FontAwesomeIcon icon={faRepeat} rotation={90} size="lg" />
          {reposts >= 1000000
            ? (reposts / 1000000).toFixed(0) + " mn"
            : reposts >= 1000
            ? (reposts / 1000).toFixed(0) + " tn"
            : reposts}
        </div>

        <div className="post-content__like-and-share__icons">
          <FontAwesomeIcon icon={faHeart} size="lg" />
          {likes >= 1000000
            ? (likes / 1000000).toFixed(0) + " mn"
            : likes >= 1000
            ? (likes / 1000).toFixed(0) + " tn"
            : likes}
        </div>

        <div className="post-content__like-and-share__icons">
          <FontAwesomeIcon icon={faChartSimple} size="lg" />
          {views >= 1000000
            ? (views / 1000000).toFixed(0) + " mn"
            : views >= 1000
            ? (views / 1000).toFixed(0) + " tn"
            : views}
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
};

export default PostItem;
