import Header from "components/Header";
import { Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

function HomePage() {
  const [themeToggle, setThemeToggle] = useState(true);
  const toggleTheme = () => {
    setThemeToggle((prev) => !prev);
  };

  useEffect(() => {
    const element = document.getElementsByTagName("main")[0];
    if (themeToggle) {
      element.style.backgroundColor = "#280241";
      element.style.color = "#f5f5f5";
    } else {
      element.style.backgroundColor = "#024104";
      element.style.color = "#f5f5f5";
    }
  }, [themeToggle]);

  return (
    <>
      <Header
        title="Hello, world!"
        html_emoji="&#128075;"
        text="Thanks for stopping by. Explore my portfolio and get a glimpse of
          what I love to create. Enjoy your stay!"
      />

      <section className="section-one">
        <article className="article">
          <h2 className="heading">Bio</h2>
          <p>
            Discover the essence of who I am on the Bio page. From my journey to
            my passions, this is where my story unfolds. Join me as I share a
            glimpse into the experiences and interests that shape my world.
          </p>
          <Link aria-label="Read more about bio" to="/bio">
            read more
          </Link>
        </article>
        <article className="article">
          <h2 className="heading">Portfolio</h2>
          <p>
            Dive into my Portfolio page to explore a collection of my creative
            ventures. From web development to software development, this is
            where my work comes to life. Enjoy the showcase of projects that
            define my professional journey.
          </p>
          <Link aria-label="Read more about portfolio" to="/portfolio">
            read more
          </Link>
        </article>
        <article className="article">
          <h2 className="heading">Resume</h2>
          <p>
            Explore my professional journey on the Resume page. A snapshot of
            experiences and skills that define my career path.
          </p>
          <Link aria-label="Read more about resume" to="/resume">
            read more
          </Link>
        </article>
      </section>
      <section>
        <button className="themeSwitch" onClick={toggleTheme}>
          <img src="theme.png" alt="theme icon" />
        </button>
      </section>
    </>
  );
}

export default HomePage;
