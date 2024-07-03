/* eslint-disable react/prop-types */
import { useState } from "react";
import Down from "../assets/Down.svg";
import Right from "../assets/right.svg";

const FileChanges = ({ files }) => {
  const [isCollapsed, setisCollapsed] = useState(false);

  const toggleCollapse = (index) => {
    setisCollapsed((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const modified = (line) => {
    if (line.content.startsWith("-")) {
      return true;
    }
    if (line.content.startsWith("+")) {
      return true;
    }
    return false;
  };

  return (
    <div className="monospace">
      {files?.map((change, index) => (
        <div key={index} className="mb-[2rem] px-2 xl:px-0">
          <h3 className="flex body-text leading-[20px] mb-[0.25rem] break-all">
            <span
              className="flex items-center cursor-pointer"
              onClick={() => toggleCollapse(index)}
            >
              {isCollapsed[index] ? (
                <img src={Right} alt="uncollapse" />
              ) : (
                <img src={Down} alt="collapse" />
              )}
            </span>
            {change.headFile.path}
          </h3>
          {!isCollapsed[index] && (
            <div className="bg-[#FFFFFF] border border-[#E7EBF1] p-1 overflow-auto">
              {change?.hunks?.map((hunk, hunkIndex) => (
                <div key={hunkIndex}>
                  <pre className="whitespace-pre-wrap monospace text-code-secondary">
                    {hunk.header}
                  </pre>
                  <table className="table-auto w-full text-code-primary">
                    <tbody>
                      {hunk?.lines?.map(
                        (line, index) =>
                          index > 0 && (
                            <tr
                              key={index}
                              className={`whitespace-pre-wrap ${
                                line.content.startsWith("+")
                                  ? "bg-[#D8FFCB]"
                                  : line.content.startsWith("-")
                                  ? "bg-[#FFE4E9]"
                                  : ""
                              }`}
                            >
                              <td className="w-10 text-code-secondary text-center">
                                {line.baseLineNumber
                                  ? line.baseLineNumber
                                  : "" ?? "-"}
                              </td>
                              <td
                                className={`w-10 text-code-secondary text-center ${
                                  modified(line) ? "" : "bg-[#F8FBFF]"
                                } `}
                              >
                                {line.headLineNumber
                                  ? line.headLineNumber
                                  : "" ?? "-"}
                              </td>
                              <td>{line.content}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileChanges;
