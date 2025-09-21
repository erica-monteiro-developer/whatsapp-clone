import React from "react";
import "./ChatListItem.css";

export default () => {
  return (
    <div className="chatlistItem">
      <img
        className="chatlistItem--avatar"
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt=""
      />
      <div className="chatlistItem--lines">
        <div className="chatlistItem--line">
          <div className="chatlistItem--name">Bonieky Lacerda</div>
          <div className="chatlistItem--date">19:00</div>
        </div>
        <div className="chatlistItem--line">
          <div className="chatlistItem--lastMsg">
            <p>Opa, tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
