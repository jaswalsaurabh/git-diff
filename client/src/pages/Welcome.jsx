import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome, Please go to diff route or follow readme.md file</h1>
      <Link
        to={
          "/repositories/jaswalsaurabh/omegle-better/commit/6d36828931d14c8e3a2c8acd990013d68995a094"
        }
        className="text-blue-700 underline"
      >
        Diff Page
      </Link>
    </div>
  );
};

export default Welcome;
