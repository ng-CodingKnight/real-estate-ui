import React, { Fragment, useState } from "react";
import "./App.scss";

import Header from "./Components/Common/Header/Header";
import Landing from "./Pages/Landing/Landing";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Fragment>
      <Header
        content={{
          title: "Home",
          options: ["About", "Projects", "Contact"],
        }}
        clicked={darkModeToggle}
      />
      <Landing isDarkMode={darkMode} />
    </Fragment>
  );
}

export default App;
