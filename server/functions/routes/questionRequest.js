const functions = require("firebase-functions");
let express = require("express");
let router = express.Router();
let axios = require("axios");

/* GET question */
router.get("/:language/:topic", async (req, res, next) => {
  let lang = req.params.language;
  let topic = req.params.topic;
  let topicSize;
  let randomQuestionNumber;
  let getQuestionNumberURL;
  let getQuestionURL;
  const baseURL = functions.config().base.url;

  const sendError = (error) => {
    res.status(400).send("There was an error: " + error);
  };

  const getQuestion = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      res.send(data);
    } catch (err) {
      sendError(err);
    }
  };

  const getQuestionNumber = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      topicSize = parseInt(data);
      randomQuestionNumber =
        Math.floor(Math.random() * Math.floor(topicSize)) + 1;
      getQuestionURL =
        baseURL + `/${lang}/topics/${topic}/${randomQuestionNumber}.json`;

      await getQuestion(getQuestionURL);
    } catch (err) {
      console.log(err);
      sendError(err);
    }
  };

  getQuestionNumberURL = baseURL + `/${lang}/topics/${topic}/size.json`;
  await getQuestionNumber(getQuestionNumberURL);
});

module.exports = router;
