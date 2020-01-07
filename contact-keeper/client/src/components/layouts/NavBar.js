import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

NavBar.protoType = {
  title: PropTypes.string.isRequired,
  icon: [PropTypes.string.isRequired]
};
NavBar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card-alt"
};

export default NavBar;
