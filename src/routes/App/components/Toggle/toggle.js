import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/_app.scss";

const Toggle = ({ darkMode, setDarkMode }) => (
  <div className="app_dark-mode toggle-button">
    <button onClick={() => setDarkMode(!darkMode)}>
      <FontAwesomeIcon icon={faMoon} />
    </button>
  </div>
);

export default Toggle;