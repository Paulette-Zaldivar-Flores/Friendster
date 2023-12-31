import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Friendster.png";

import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
function Navigation() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        // onSignIn(); // Call onSignIn function after successful authentication
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        window.location.href = "/";
      })
      .catch((error) => console.log(error));
  };
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="60"
            height="60"
            className="logo d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {authUser ? (
            <Nav className="ms-auto d-flex center-links">
              <Nav.Link href="/Home" className="ms-3">
                Home
              </Nav.Link>
              <Nav.Link href="/MyEvents" className="ms-3">
                My Events
              </Nav.Link>
              <div>
              <p className="signedIn">
                {`Hi, ${authUser.email}`}</p>
                <Button
                  variant="success"
                  className="ms-3"
                  onClick={userSignOut}
                >
                  Log Out
                </Button>
                </div>

            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
