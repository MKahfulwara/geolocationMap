import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand href="#">Geolocation Management Application</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
