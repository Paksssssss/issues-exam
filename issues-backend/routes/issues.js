const express = require("express");
const router = express.Router();
const sampleIssues = require("./issues.json");

// define the home page route
router.get("/", (req, res) => {
  res.status(200).json(sampleIssues);
});

// define the home page route
router.put("/:id", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Issue has been Updated", status: "success" });
});

// define the home page route
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Issue has been created", status: "success" });
});

// define the home page route
router.delete("/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: "Issue has been deleted", status: "success" });
});

module.exports = router;
