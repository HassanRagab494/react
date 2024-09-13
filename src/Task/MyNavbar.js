import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./MyNavbar.css";
function MyNavbar() {
  return (
    <Navbar expand="md" className="navbar-custom">
      <div className="container">
        <NavbarBrand href="/" className="navbar-brand-custom">
          <h1 className="navbar-logo">Korea Corner</h1>
        </NavbarBrand>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink href="/" className="nav-link-custom">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/categories" className="nav-link-custom">
              Categories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/trending" className="nav-link-custom">
              Trending
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/trending" className="nav-link-custom">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/contact" className="nav-link-customm">
              Contact
            </NavLink>
          </NavItem>

          <NavItem>
            <button className="btn-custom">Login</button>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
