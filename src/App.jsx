import React, { useState, useEffect } from "react";
import "./App.css";
import ChatListItem from "./components/ChatListItem";
import { DonutLarge, Chat, MoreVert, Search } from "@mui/icons-material";

export default () => {
  const [chatlist, setChatList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
          />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLarge style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <Chat style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVert style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <Search fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem key={key} />
          ))}
        </div>
      </div>

      <div className="contentarea">...</div>
    </div>
  );
};
