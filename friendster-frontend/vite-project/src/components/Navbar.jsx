import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/Friendster.png";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navigation() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        handleTokenExpiration();
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleTokenExpiration = () => {
    const storedToken = localStorage.getItem("userToken");
    const storedExpiration = localStorage.getItem("tokenExpiration");

    if (storedToken && storedExpiration) {
      if (new Date().getTime() > parseInt(storedExpiration)) {
        handleExpiredToken();
      } else {
        console.log("Token is valid.");
        // Proceed with using the token for authenticated requests
      }
    } else {
      console.log("Token not found or expired.");
      // Handle token or expiration time not found
    }
  };

  const handleExpiredToken = () => {
    console.log("Token expired. Please log in again.");
    localStorage.removeItem("userToken");
    localStorage.removeItem("tokenExpiration");
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        window.location.href = "/";
      })
      .catch((error) => console.log("Error signing out:", error));
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signing out...");
        localStorage.removeItem("userToken");
        localStorage.removeItem("tokenExpiration");
        console.log("Signed out");
        window.location.href = "/";
      })
      .catch((error) => console.log("Error signing out:", error));
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
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
            <AuthenticatedNav user={authUser} onSignOut={userSignOut} />
          ) : (
            <UnauthenticatedNav />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function AuthenticatedNav({ user, onSignOut }) {
  return (
    <Nav className="ms-auto d-flex center-links">
      <Nav.Link href="/" className="ms-3">
        Home
      </Nav.Link>
      <Nav.Link href="/MyEvents" className="ms-3">
        My Events
      </Nav.Link>
      <Button
        variant="text"
        className="ms-3 purple-grad-btn"
        onClick={onSignOut}
      >
        Logout
      </Button>
      <p className="signedIn softwhite-bg mb-0">{`Hi, ${user.email}`}</p>
    </Nav>
  );
}

function UnauthenticatedNav() {
  return (
    <Nav className="ms-auto d-flex center-links">
      <Nav.Link href="/" className="ms-3">
        Home
      </Nav.Link>
      <Nav.Link href="/" className="ms-3 purple-grad-btn">
        Login
      </Nav.Link>
    </Nav>
  );
}

export default Navigation;
