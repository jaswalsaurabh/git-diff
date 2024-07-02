export const commitData = {
  commitMessage: "Remove some wrappers from a previous abstraction (#14142)",
  author: "seeliger",
  date: "4 days ago",
  commitID: "05f0517a515a2ba7e8da806329017acbda509a",
  parentCommitID: "ab0d39b2b050f517a515a2ba7e8da806329017",
  files: [
    {
      fileName: "enterprise/internal/second/path/second_file.go",
      additions: 3,
      deletions: 1,
      changes: [
        {
          line: 39,
          type: "addition",
          content: "+    if queryErr != nil {",
        },
        {
          line: 40,
          type: "addition",
          content: "+        return nil, queryErr",
        },
        {
          line: 41,
          type: "addition",
          content: "+    }",
        },
      ],
    },
  ],
};
