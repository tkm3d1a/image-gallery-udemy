import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/tts_image_gallery_logo.svg";

const navbarStyle = {
  backgroundColor: "#acacac",
};

const Header = ({ title }) => {
  return (
    <Container fluid>
      <Navbar style={navbarStyle} variant="light">
        <Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "8rem" }} />
      </Navbar>
    </Container>
  );
};

export default Header;
