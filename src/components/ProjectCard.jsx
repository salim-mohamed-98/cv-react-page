import React, { useRef } from "react";

export default function ProjectCard({ name, short_desc, description, date }) {
  const dialog_ref = useRef(null);

  const closeModal = (e) => {
    dialog_ref?.current.close();
  };

  const openModal = (e) => {
    dialog_ref?.current.showModal();
  };

  return (
    <>
      <div
        className="cover"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${name}/1000/800)`,
        }}
      ></div>
      <div className="text">
        <h3>{name}</h3>
        <small>
          <time datetime="2023-11-11">{date}</time>
        </small>
        <p>{short_desc}</p>
      </div>
      <button aria-label="read more about project 2" onClick={openModal}>
        Read more
      </button>
      <dialog ref={dialog_ref}>
        <article>
          <h1 className="text-center">{name}</h1>
          <div className="content">
            <small>
              <time datetime="2023-11-11"> November 11, 2023 </time>
            </small>
            <p>{description}</p>
          </div>
        </article>
        <button aria-label="close modal" onClick={closeModal}>
          Close
        </button>
      </dialog>
    </>
  );
}
