import React, { Component } from "react";

//cannot use lifecycle hooks in functional components
const NavBar = ({ totalCounters }) => {
  console.log("navbar render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
