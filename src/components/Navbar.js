import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import RaLogo from "../Assets/Images/Raed.png";
import { Link } from "react-router-dom";

// Icons
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { MdInterests, MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={RaLogo}
            style={{ width: "70px", height: "auto" }}
            className="img-fluid"
            alt="brand"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            {/* HOME */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* ABOUT */}
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* EDUCATION */}
            <Nav.Item>
              <Nav.Link as={Link} to="/education" onClick={() => updateExpanded(false)}>
                <IoSchoolOutline style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            {/* EXPERIENCE - NOUVELLE SECTION */}
            <Nav.Item>
              <Nav.Link as={Link} to="/experience" onClick={() => updateExpanded(false)}>
                <MdWork style={{ marginBottom: "2px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            {/* PROJECTS */}
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* CERTIFICATIONS */}
            <Nav.Item>
              <Nav.Link as={Link} to="/certifications" onClick={() => updateExpanded(false)}>
                <FaCertificate style={{ marginBottom: "2px" }} /> Certifications
              </Nav.Link>
            </Nav.Item>

            {/* INTERESTS */}
            <Nav.Item>
              <Nav.Link as={Link} to="/interests" onClick={() => updateExpanded(false)}>
                <MdInterests style={{ marginBottom: "2px" }} /> Interests
              </Nav.Link>
            </Nav.Item>

            {/* RESUME */}
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;