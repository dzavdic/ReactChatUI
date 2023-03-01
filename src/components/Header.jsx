import React from "react";

const Header = (props) => {

  const { showBot, onShow } = props;

    if (showBot) {
        return (
        <div className="header">
          <p>React Chatbot UI</p>
          <a href="/" onClick={(e) => {onShow(e)}}>Close</a>
          </div>
      );
    }else {
      return (
        <div className="header">
        <a href="/" onClick={(e) => {onShow(e)}}>Show</a>
        </div>
      );
    }
}
export default Header;
