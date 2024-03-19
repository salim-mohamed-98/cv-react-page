import React, { useEffect, useState } from "react";
import ProjectCardList from "components/ProjectCardList";
import Header from "components/Header";

const user = "salim-mohamed-98";
const BASE_URL = "https://api.github.com/users";
const url = `${BASE_URL}/${user}/repos`;

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = (await res.json()).map((repo) => ({
          name: repo.name,
          desc: repo.description,
        }));
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) {
    return (
      <div>
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    );
  }

  return (
    <>
      <Header
        title="A list of My projects."
        text="Projects i worked on over the years throughout my study."
      />
      <section>
        {isLoading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          <ProjectCardList projects={data} />
        )}
      </section>
    </>
  );
}
