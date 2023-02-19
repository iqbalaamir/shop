import React from "react";
import { Container, Navbar } from "react-bootstrap";
  
const NavBar = ({ cartItems }) => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Ecommerce Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Cart ({cartItems.length})
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default NavBar;
