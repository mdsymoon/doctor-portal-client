import React from "react";
import "./NavbarPage.css";
import {  Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className="navbar-text">
            Home
          </Link>
          <Link to="/appointment" className="navbar-text">
            Appointment
          </Link>
          <Link to="/dashboard" className="navbar-text">
            Dashboard
          </Link>
          <Nav.Link href="#link" className="navbar-text">
            Reviews
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-text">
            Blog
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-text">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPage;
