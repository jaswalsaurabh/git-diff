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

  return (
    <div className="monospace">
      {files?.map((change, index) => (
        <div key={index} className="mb-[2rem]">
          <h3 className="flex body-text leading-[20px] mb-[0.25rem]">
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
                  <pre className="whitespace-pre-wrap monospace">
                    {hunk.header}
                  </pre>
                  {hunk?.lines?.map((line, index) => (
                    <pre
                      key={index}
                      className={`whitespace-pre-wrap monospace ${
                        line.content.startsWith("+")
                          ? "bg-[#D8FFCB]"
                          : line.content.startsWith("-")
                          ? "bg-[#FFE4E9]"
                          : ""
                      }`}
                    >
                      <span className="inline-block w-20 text-code-secondary px-2">
                        {line.baseLineNumber
                          ? line.baseLineNumber
                          : "  " ?? "-"}{" "}
                        {line.headLineNumber ? line.headLineNumber : "" ?? "-"}
                      </span>
                      {line.content}
                    </pre>
                  ))}
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
