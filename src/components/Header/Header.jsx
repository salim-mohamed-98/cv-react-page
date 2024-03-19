import React from "react";

export default function Header({ title, text, html_emoji }) {
  return (
    <header>
      <h1 className="heading">
        {title} <span aria-hidden>{html_emoji}</span>
      </h1>
      <p>{text}</p>
    </header>
  );
}
