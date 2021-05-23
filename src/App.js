import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);

  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    async function fetchRepos() {
      setFetching(true);
      const response = await fetch(
        "https://api.github.com/users/waseem602/repos"
      );
      var result = await response.json();

      console.log(result);
      setRepos(result);
      setFetching(false);
    }
    fetchRepos();
  }, []);
  if (isFetching) {
    return (
      <div className="lose">
        <h1>My GitHub Repos:</h1>
        <h2>Data Fetching, please wait!</h2>
      </div>
    );
  }

  return (
    <div className="win">
      <div className="lose">
        <h1>My GitHub Repos:</h1>
        <h2>Data Fetched!</h2>
      </div>
      <ul>
        {repos.map((reposObj, index) => {
          return (
            <span>
              <li key={reposObj.id}>
                {index + 1}:)&nbsp;&nbsp;&nbsp;&nbsp;
                {reposObj.id} ===={">"} {reposObj.name}
              </li>
            </span>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
