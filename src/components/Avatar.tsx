import { useCallback } from "react";
import useUser from "@/hooks/useUser";

import { useRouter } from "next/router";
import Image from "next/image";

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
        ${hasBorder ? "has-border" : ""}
        ${isLarge ? "is-larger" : "is-large"}
        container
    `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
