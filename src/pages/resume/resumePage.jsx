import React from "react";
import cv from "data/cv.json";
import Header from "components/Header";

export default function ResumePage() {
  return (
    <>
      <Header
        title="My resume"
        html_emoji="&#128196;"
        text="My work experiences, educations and skills."
      />
      <article>
        <section className="intro" aria-labelledby="introductory">
          <h2 id="introductory" className="heading">
            Introductory
          </h2>
          <p>{cv?.introductory}</p>
        </section>
        <div className="grid">
          <section aria-labelledby="experiences-heading">
            <h2 id="experiences-heading" className="heading">
              Work experiences
            </h2>
            <dl>
              {cv?.experiences?.map((item) => (
                <div>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section aria-labelledby="educations-heading">
            <h2 id="educations-heading" className="heading">
              Educations
            </h2>
            <dl>
              {cv?.educations?.map((item) => (
                <div>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
        <section aria-label="a list of my skills">
          <h2 className="heading text-center">Skills</h2>
          <ul className="v-list">
            {cv?.skills?.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}

// <h1>Introductory</h1>
// <p>{cv?.introductory}</p>
// <h2>Experiences</h2>
// {cv?.experiences?.map((item) => (
//   <dl>
//     <dt>{item.title}</dt>
//     <dd>{item.description}</dd>
//   </dl>
// ))}

// <h2>Educations</h2>
// {cv?.educations?.map((item) => (
//   <dl>
//     <dt>{item.title}</dt>
//     <dd>{item.description}</dd>
//   </dl>
// ))}
