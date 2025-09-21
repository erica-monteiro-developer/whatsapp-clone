import React from "react";
import "./App.css";
import { DonutLarge, Chat, MoreVert } from "@mui/icons-material";

export default () => {
  return (
    <div className="app-window">
      <div className="sidebar">
            <header>
                  <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" /> 
                  <div className="header--buttons">
                      <div className="header--btn">
                          <DonutLarge style={{ color: '#919191' }} />
                      </div>
                      <div className="header--btn">
                          <Chat style={{ color: '#919191' }} />
                      </div>
                      <div className="header--btn">
                          <MoreVert style={{ color: '#919191' }} />
                      </div>
                  </div>  
            </header>
              <div className="search">
                  ...
              </div>
              <div className="chatlist">
                  ...
              </div>
          </div>
          
      <div className="contentarea">
        ...
      </div>
    </div>
  )
}