import React, { useEffect } from "react";

import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import { NavLink, useLocation } from "react-router-dom";



const NavbarComp = () => {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link>
                <NavLink
                  to="/"
                  style={
                    location.pathname === "/"
                      ? {
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "rgba(0,0,0,.8)",
                        }
                      : {
                          fontWeight: "normal",
                          textDecoration: "none",
                          color: "rgba(0,0,0,.8)",
                        }
                  }
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/about"
                  style={
                    location.pathname === "/about"
                      ? {
                          fontWeight: "bold",
                          textDecoration: "none",
                          color: "rgba(0,0,0,.8)",
                        }
                      : {
                          fontWeight: "normal",
                          textDecoration: "none",
                          color: "rgba(0,0,0,.8)",
                        }
                  }
                >
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
