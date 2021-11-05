import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="app menu">
    <Link to="/">Home</Link>
    <Link to="/user" >User</Link>
  </div>
);

export default Header;