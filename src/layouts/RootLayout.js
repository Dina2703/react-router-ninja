import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Job Finder</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">All rights reserved</footer>
    </div>
  );
}

export default RootLayout;
