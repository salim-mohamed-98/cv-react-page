import React from "react";
import ProjectCard from "components/ProjectCard";

export default function ProjectCardList({ projects }) {
  const isNotEmptyList = Array.isArray(projects) && projects.length !== 0;
  return (
    <>
      <h2 className="heading" id="projects">
        Projects
      </h2>
      {isNotEmptyList ? (
        <ul className="cards" aria-labelledby="projects">
          {projects?.map((item) => (
            <li key={item.name} className="card">
              <ProjectCard
                name={item.name}
                short_desc={item.desc}
                description={item.desc}
                date="November 11, 2023"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>No projects found.</div>
      )}
    </>
  );
}
