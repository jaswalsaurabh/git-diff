import { formatDateDifference } from "../utils/converter";

/* eslint-disable react/prop-types */
const Header = ({ commit }) => {
  return (
    <header className="flex mb-[2rem]">
      <div className="flex w-full flex-col mx-2 xl:mx-0 lg:flex-row">
        <img
          src={"https://avatars.githubusercontent.com/u/70649392?v=4"}
          alt="Author Avatar"
          className="w-12 h-12 rounded-full mr-[.5rem]"
        />
        <div className="flex flex-col w-full justify-between lg:flex-row">
          <div className="flex w-full lg:w-[50%] justify-between items-start">
            <div>
              <h2 className="header">{commit.message}</h2>
              <p className="text-muted text-body-text">
                Authored by{" "}
                <span className="text-body font-[700]">
                  {commit.author.name}
                </span>{" "}
                {formatDateDifference(commit.author.date)}
              </p>
              <p className="text-body text-body-text">
                This is body text. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Eget ipsum massa egestas id pellentesque
                volutpat maecenas amet.
              </p>
            </div>
          </div>
          <div className="flex mt-4 flex-col w-full lg:w-[50%]">
            <div className="flex text-body-text font-monospace lg:justify-end">
              {(commit.author.date !== commit.committer.date ||
                commit.author.name !== commit.committer.name) && (
                <p className="text-muted text-body-text">
                  Committed by{" "}
                  <span className="font-semibold">{commit.committer.name}</span>{" "}
                  {formatDateDifference(commit.committer.date)}
                </p>
              )}
            </div>

            <div className="flex flex-wrap text-body-text font-monospace lg:justify-end">
              <p className="text-muted">Commit</p>
              <p className="text-body lg:ml-1 break-all"> {commit.oid}</p>
            </div>
            <div className="flex flex-wrap text-link-monospace font-monospace lg:justify-end">
              <p className="text-muted">Parent</p>

              {commit.parents.map((parent) => (
                <p
                  key={parent.oid}
                  className="text-link-monospace lg:ml-1 text-link break-all"
                >
                  {parent.oid}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
