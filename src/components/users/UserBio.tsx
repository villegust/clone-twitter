import { format } from "date-fns";
import { BiCalendar } from "react-icons/bi";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";
import Button from "../Button";

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div className="bio-content">
      <div className="bio-content__follow-btn">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          <Button onClick={() => {}} label="Follow" secondary />
        )}
      </div>
      <div className="bio-content__user">
        <div className="bio-content__user__text">
          <h2>{fetchedUser?.name}</h2>
          <p>@{fetchedUser?.username}</p>
        </div>

        <div className="bio-content__user__bio">
          <p>{fetchedUser?.bio}</p>
        </div>

        <div className="bio-content__user__joined">
          <BiCalendar size={20} />
          <p>Joined {createdAt}</p>
        </div>

        <div className="bio-content__user__follow-following">
          <div className="bio-content__user__follow-following__content">
            <p className="number">{fetchedUser?.followingIds?.length}</p>
            <p className="text">Following</p>
          </div>
          <div className="bio-content__user__follow-following__content">
            <p className="number">{fetchedUser?.followersCount || 0}</p>
            <p className="text">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
