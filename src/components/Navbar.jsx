import React from "react";

function Navbar() {
  return (
    <header id="header" className="fixed-top bg-dark">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="index.html" className="logo bg-danger d-flex">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        {/* Navigation */}
        <nav id="navbar" className="navbar bg-info">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#contact">Get Started</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
