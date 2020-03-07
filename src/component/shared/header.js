import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../assets/styles/header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./images/BrandLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="ml-auto mr-auto">
          <Nav.Link className="txt-navlinks" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="txt-navlinks" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="txt-navlinks" href="#portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="txt-navlinks" href="#blogs">
            Blogs
          </Nav.Link>
          <Nav.Link className="txt-navlinks" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className=" lbl-header" href="#home">
            Shishir
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
