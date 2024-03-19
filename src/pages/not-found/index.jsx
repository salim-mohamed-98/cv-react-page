import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <header>
      <h1>404 Error Not Found</h1>
      <div style={{ color: "white" }}>
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}
