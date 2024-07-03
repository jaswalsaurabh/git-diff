const { parseCommit, transformCommitData } = require("../helper/utils");
const commitData = require("../mockData");

const router = require("express").Router();
const API_URL = "https://api.github.com/repos/";

const commitInfoCache = {};

router.get("/", (req, res) => {
  try {
    res.send("Hello from git diff server");
  } catch (error) {
    res.status(400).send("Something is wrong");
  }
});

router.get(
  "/repositories/:owner/:repository/commits/:oid",
  async (req, res) => {
    try {
      const { owner, repository, oid } = req.params;
      let data;
      if (!commitInfoCache[oid]) {
        const response = await fetch(
          API_URL + `${owner}/${repository}/commits/${oid}`
        );

        data = await response.json();
        commitInfoCache[oid] = data;
      } else {
        data = commitInfoCache[oid];
      }

      // mock data start
      // data = commitData;
      // commitInfoCache[oid] = data;
      // mock data end
      const newData = parseCommit(data);
      res.status(200).json([...newData]);
    } catch (error) {
      res.status(400).json({ message: "Something went wrong", error });
    }
  }
);

router.get(
  "/repositories/:owner/:repository/commits/:oid/diff",
  async (req, res) => {
    try {
      const { oid } = req.params;
      const commitData = commitInfoCache[oid];
      const newData = transformCommitData(commitData);
      res.status(200).json([...newData]);
    } catch (error) {
      res.status(400).json({ message: "Something went wrong", error });
    }
  }
);

module.exports = { router };
