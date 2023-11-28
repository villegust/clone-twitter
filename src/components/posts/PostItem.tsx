import React, { useCallback, useMemo } from "react";
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

import { useRouter } from "next/router";
import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";

const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();

      loginModal.onOpen();
    },
    [loginModal]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div className="post-content">
      <div className="post-content__top">
        <div className="post-content__top__image">
          <Avatar userId={data.user.id} />
        </div>
        <div className="post-content__top__text">
          <div className="post-content__top__text__profile">
            <h3 onClick={goToUser}>{data.user.name}</h3>
            <p onClick={goToUser}>
              @{data.user.username} · {createdAt}
            </p>
          </div>
          <h4> {data.body} </h4>
        </div>
      </div>
      <div className="post-content__like-and-share">
        <div className="post-content__like-and-share__icons">
          <FontAwesomeIcon id="comment" icon={faComment} size="lg" />
          <p id="comment">{data.comments?.length || 0}</p>
          {/* {data.comments >= 1000000
            ? (data.comments / 1000000).toFixed(0) + " mn"
            : data.comments >= 1000
            ? (data.comments / 1000).toFixed(0) + " tn"
            : data.comments} */}
        </div>

        <div className="post-content__like-and-share__icons" onClick={onLike}>
          <FontAwesomeIcon id="like" icon={faHeart} size="lg" />
          <p id="like">{data.likes?.length || 0}</p>
          {/* {data.likes >= 1000000
            ? (data.likes / 1000000).toFixed(0) + " mn"
            : data.likes >= 1000
            ? (data.likes / 1000).toFixed(0) + " tn"
            : data.likes} */}
        </div>
      </div>
      {/* <div className="post-content__post-img">
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
      </div> */}
    </div>
  );
};

export default PostItem;
