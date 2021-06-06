import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ content }) => {
  const [isScroll, setScroll] = useState(false);

  const getScrollStatus = () => {
    if (window.scrollY >= 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", getScrollStatus);
  return (
    <div className={`header ${isScroll ? "header--scroll" : ""}`}>
      <div className="header__title">{content.title}</div>
      <div className="header__content">
        {content.options.map((item) => {
          return <div className="header__item">{item}</div>;
        })}
      </div>
      <input placeholder="Search Properties" type="string" />
      <SearchIcon />
    </div>
  );
};

export default Header;
