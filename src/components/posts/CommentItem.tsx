import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";

const CommentItem: React.FC<CommentItemProps> = ({ data }) => {
  const router = useRouter();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div className="comment-box">
      <div className="comment-box__content">
        <Avatar userId={data.user.id} />
        <div>
          <div className="comment-names">
            <p onClick={goToUser}>{data.user.name}</p>
            <span onClick={goToUser}>@{data.user.username}</span>·
            <span>{createdAt}</span>
          </div>
          <div className="comment-text">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
