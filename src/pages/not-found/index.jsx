import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <header>
      404 Not Found
      <div>
        <Link to="/">Home</Link>
      </div>
    </header>
  );
}
