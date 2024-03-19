import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "pages/home";
import RootLayout from "pages/rootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioPage from "pages/portfolio";
import ResumePage from "pages/resume";
import NotFound from "pages/not-found";
import BioPage from "pages/bio";
import WcagPage from "pages/wcag/";
import "styles/global.css";
import "styles/bio.css";
import "styles/index.css";
import "styles/navbar.css";
import "styles/portfolio.css";
import "styles/resume.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/bio",
        element: <BioPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/wcag",
        element: <WcagPage />,
      },
    ],
  },
]);

const PASS = "1337";
const key_input = [];

document.addEventListener("keydown", (e) => {
  key_input.push(e.key);
  if (key_input.length > PASS.length) {
    key_input.shift();
    if (key_input.reduce((prev, current) => prev + current) === PASS)
      alert(
        "How many developers does it take to screw in a lightBulp?\n\nNone, It's a hardware problem."
      );
  }
});

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
// });

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
