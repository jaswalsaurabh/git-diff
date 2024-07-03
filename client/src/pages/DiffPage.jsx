import { useEffect, useState } from "react";
import Header from "../components/Header";
import FileChanges from "../components/FileChanges";
import { useParams } from "react-router-dom";

const DiffPage = () => {
  const [commit, setCommit] = useState(null);
  const [diff, setDiff] = useState(null);
  const path = useParams();
  const { oid, repository, owner } = path;

  const API_URL = "http://localhost:3001/repositories/";

  useEffect(() => {
    fetch(API_URL + `${owner}/${repository}/commits/${oid}`)
      .then((response) => response.json())
      .then(async (data) => {
        setCommit(data);
        fetch(API_URL + `${owner}/${repository}/commits/${oid}/diff`)
          .then((response) => response.json())
          .then(async (data) => {
            setDiff(data);
          })
          .catch((error) => console.error("Error fetching diff data:", error));
      })
      .catch((error) => {
        setCommit([]);
        console.error("Error fetching commit data:", error);
      });
  }, []);

  if (!commit)
    return <div className="flex items-center justify-center">Loading...</div>;
  return (
    <div>
      <Header commit={commit[0]} />
      <FileChanges files={diff} />
    </div>
  );
};

export default DiffPage;
