import React from "react";
import Image from "next/image";
import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";

function FollowBar() {
  const { data: users = [] } = useUsers();

  if (users.lenth === 0) {
    return null;
  }
  return (
    <section className="account-section">
      <div className="account-content">
        <div className="account-content__box">
          <div className="account-content__box__title">
            <h2>Recomended accounts</h2>
          </div>
          {users.map((user: Record<string, any>) => {
            return (
              <div key={user.id} className="account-content__box__account-box">
                <Avatar userId={user.id} />
                <div className="account-content__box__account-box__info">
                  <h3>{user.name}</h3>
                  <p>@{user.username}</p>
                </div>
              </div>
            );
          })}
          <div className="account-content__box__view-more">
            <a href="#">View more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowBar;
