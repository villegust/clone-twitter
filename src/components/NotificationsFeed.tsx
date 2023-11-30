import { BsTwitter } from "react-icons/bs";

import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return <div className="no-notifications">No notifications</div>;
  }

  return (
    <div className="notification-content">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div key={notification.id} className="notification-content__box">
          <BsTwitter color="white" size={32} />
          <p>{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsFeed;
