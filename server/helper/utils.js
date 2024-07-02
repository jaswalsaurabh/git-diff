// function parseCommit(commitData) {
//   const changes = [];
//   const files = commitData;

//   if (files.length > 0) {
//     const headFile = files[0];
//     const baseFile = files.find((file) => file.filename !== headFile.filename);
//     const changeKind =
//       headFile.filename === baseFile.filename ? "MODIFIED" : "UNKNOWN";

//     const hunks = files
//       .map((file) => {
//         const hunksData = file.patch || "";
//         if (hunksData) {
//           return hunksData
//             .split(/\n@@\s*-*\d+,\d+\s*+\d+,\d+\s*@@\s*/gm)
//             .slice(1) // Skip the first line (header)
//             .map((hunk) => {
//               const lines = hunk.split("\n");
//               const header = lines[0];
//               const content = lines.slice(1);
//               return {
//                 header,
//                 lines: content.map((line) => {
//                   const match = line.match(/^( *)(-\s+|\+\s+|\s+)(.*)$/);
//                   if (match) {
//                     const [, prefix, change, content] = match;
//                     return {
//                       baseLineNumber:
//                         change === "-"
//                           ? parseInt(prefix.replace(/\s+/g, ""), 10) || 0
//                           : 0,
//                       headLineNumber:
//                         change === "+"
//                           ? parseInt(prefix.replace(/\s+/g, ""), 10) || 0
//                           : 0,
//                       content,
//                     };
//                   } else {
//                     return {
//                       baseLineNumber: 0,
//                       headLineNumber: 0,
//                       content: line,
//                     };
//                   }
//                 }),
//               };
//             });
//         }
//         return [];
//       })
//       .flat();

//     changes.push({
//       changeKind,
//       headFile: { path: headFile.filename },
//       baseFile: baseFile ? { path: baseFile.filename } : null,
//       hunks,
//     });
//   }

//   return changes;
// }

function parseCommit(commitData) {
  const changes = [];
  const resObj = {};
  if (Object.keys(commitData).length > 0) {
    resObj.oid = commitData.sha;
    resObj.message = commitData.commit.message;
    resObj.author = commitData.commit.author;
    resObj.committer = commitData.commit.committer;
    resObj.parents = commitData.parents.map((item) => {
      if (item.sha) {
        const newItem = {};
        newItem.oid = item.sha;
        return newItem;
      }
      return item;
    });
    changes.push({ ...resObj });
  }
  return changes;
}

function parsePatch(patch) {
  const hunks = [];
  const lines = patch.split("\n");
  let currentHunk = null;
  let baseLineStart = 0;
  let headLineStart = 0;

  lines.forEach((line) => {
    const hunkHeaderMatch = line.match(/@@ -(\d+),?\d* \+(\d+),?\d* @@/);

    if (hunkHeaderMatch) {
      if (currentHunk) {
        hunks.push(currentHunk);
      }

      baseLineStart = parseInt(hunkHeaderMatch[1], 10);
      headLineStart = parseInt(hunkHeaderMatch[2], 10);

      currentHunk = {
        header: hunkHeaderMatch[0],
        lines: [],
      };
    }

    if (currentHunk) {
      let baseLineNumber = null;
      let headLineNumber = null;

      if (line.startsWith("-")) {
        baseLineNumber = baseLineStart++;
      } else if (line.startsWith("+")) {
        headLineNumber = headLineStart++;
      } else {
        baseLineNumber = baseLineStart++;
        headLineNumber = headLineStart++;
      }

      currentHunk.lines.push({
        baseLineNumber,
        headLineNumber,
        content: line,
      });
    }
  });

  if (currentHunk) {
    hunks.push(currentHunk);
  }

  return hunks;
}

function transformCommitData(commitData) {
  return commitData.files.map((file) => ({
    changeKind: "MODIFIED",
    headFile: {
      path: file.filename,
    },
    baseFile: {
      path: file.filename,
    },
    hunks: file.patch ? parsePatch(file.patch) : [],
  }));
}

module.exports = { parseCommit, parsePatch, transformCommitData };
