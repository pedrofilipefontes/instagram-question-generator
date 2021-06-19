const functions = require("firebase-functions");
let express = require("express");
let cors = require("cors");

let questionRequest = require("./routes/questionRequest");
let index = require("./routes/index");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: functions.config().baseapp.url,
  })
);

app.use("/get-question", questionRequest);
app.use("/", index);

exports.app = functions.https.onRequest(app);
