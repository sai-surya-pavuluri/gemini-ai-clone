import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu" onClick={() => setHide(prev => !prev)}/>
        
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {hide ? <p>New Chat</p> : null}
        </div>
        {hide ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {hide?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {hide?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {hide?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
