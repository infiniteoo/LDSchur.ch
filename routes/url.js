const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");
const Url = require("../models/Url");
const isPorn = require("is-porn");
const psl = require("psl");
const extractHostname = require("../utils/extractHostname");
const bannedKeywords = require("../utils/bannedKeywords");

// @ route - POST /api/url/shorten
// @ desc - create short URL
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get("baseUrl");
  let bannedHits = 0;

  // Check long url
  if (validUrl.isUri(longUrl)) {
    // make sure url is not porn or on banned list
    isPorn(psl.get(extractHostname(longUrl)), async (err, status) => {
      if (status) {
        console.log("this is an unworthy link for our site");
        return res.json("porn site");
      } else {
        console.log("this is not a porn site");

        // if returns false, then search extractedHostname for keywords

        bannedKeywords.forEach((keyword) => {
          if (psl.get(extractHostname(longUrl)).includes(keyword)) {
            bannedHits++;

            console.log(
              `contains banned keyword: ${keyword}. this is an unworthy link for our site`
            );
            return res.json(`banned keyword`);
          }
        });

        checkDB(bannedHits, longUrl, baseUrl)
          .then((url) => {
            console.log("returned url:", url);
            if (url !== "banned") {
              console.log(url);
              return res.json(url);
            } else {
              return res.json("banned keyword");
            }
          })
          .catch((err) => {
            return res.json(err);
          });
      }
    });
  } else {
    console.log(`valid-url defines "${longUrl}" as an invalid long url`);
    return res.json("Invalid url");
  }
});

async function checkDB(bannedHits, longUrl, baseUrl) {
  // Create url code
  const urlCode = shortid.generate();

  // look for url in database & shorten
  if (bannedHits === 0) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        return url;
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        return url;
      }
    } catch (err) {
      console.error(err);
      return "banned";
    }
  } else {
    return "banned";
  }
}
module.exports = router;
