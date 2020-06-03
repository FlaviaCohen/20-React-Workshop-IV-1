const express = require("express");
const router = new express.Router();
const lyr = require("lyrics-fetcher");
module.exports = router;

router.get("/:artist/:song", (req, res, next) => {
  lyr.fetch(req.params.artist, req.params.song, (err, r) => {
    if (err) return next(err);
    res.send({ lyric: r });
  });
});
