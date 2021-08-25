import React from "react";
import "./NavbarPage.css";
import {  Nav, Navbar } from "react-bootstrap";

const NavbarPage = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="navbar-text">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-text">
            About
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-text">
            Dental Services
          </Nav.Link>
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
