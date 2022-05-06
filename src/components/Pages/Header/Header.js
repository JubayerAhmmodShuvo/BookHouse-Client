import React from 'react';
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import logo from "../../images/logobook.png";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

   const [user] = useAuthState(auth);

   const handleSignOut = () => {
     signOut(auth);
   };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className=" bg-violet-100 text-lg font-bold  "
        variant="light"
      >
        <Navbar.Brand as={Link} to="/">
          <img className="h-8 ml-10" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto   ">
            <NavLink as={Link} to="/home">
              Home
            </NavLink>
            <NavLink as={Link} to="/blogs">
              Blogs
            </NavLink>
          </Nav>
          <Nav className="mr-10">
            <Nav.Link as={Link} to=""></Nav.Link>
            {user && (
              <>
                <Nav.Link as={Link} to="/manageitems">
                  ManageItems
                </Nav.Link>
                <Nav.Link as={Link} to="/additems">
                  AddItems
                </Nav.Link>
                <Nav.Link as={Link} to="/myitems">
                  MyItems
                </Nav.Link>
              </>
            )}
            {user ? (
              <button
                className="btn btn-primary text-white text-xl  mx-4"
                onClick={handleSignOut}
              >
                sign out
              </button>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="btn btn-primary text-white text-xl  mx-4"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;