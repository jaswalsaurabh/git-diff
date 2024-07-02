import { useEffect, useState } from "react";
import Header from "./components/Header";
import FileChanges from "./components/FileChanges";
import { globalStyles } from "./components/StyleComp";

const App = () => {
  const [commit, setCommit] = useState(null);
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:3001/repositories/jaswalsaurabh/omegle-better/commits/6d36828931d14c8e3a2c8acd990013d68995a094"
    )
      .then((response) => response.json())
      .then(async (data) => {
        setCommit(data);
        fetch(
          "http://localhost:3001/repositories/jaswalsaurabh/omegle-better/commits/6d36828931d14c8e3a2c8acd990013d68995a094/diff"
        )
          .then((response) => response.json())
          .then(async (data) => {
            console.log("this is diff data", data);
            setDiff(data);
          })
          .catch((error) => console.error("Error fetching diff data:", error));
      })
      .catch((error) => console.error("Error fetching commit data:", error));
  }, []);

  // useEffect(() => {
  //   if (commit) {

  //   }
  // }, [commit]);

  if (!commit) return <div>Loading...</div>;

  return (
    <div className={`container mx-auto m-[2rem] ${globalStyles.body} bg-[#FBFDFF]`}>
      <Header commit={commit[0]} />
      {/* <CommitInfo commit={commit[0]} /> */}
      <FileChanges files={diff} />
    </div>
  );
};

export default App;
