import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function RootLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        aria-label="skip to main content"
      >
        skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
