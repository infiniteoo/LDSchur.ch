const express = require("express");
const router = express.Router();
const Url = require("../models/Url");



router.get("/", (req, res) => {});

// @route GET /:code
// @description Redirect to long/original URL
router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("no url found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
});

module.exports = router;
