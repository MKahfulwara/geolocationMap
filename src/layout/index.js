import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
const NavBar = React.lazy(() => import("../components/Navbar"));
function Layout() {
  return (
    <>
      <NavBar />
      <Container className="app-wrapper">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
