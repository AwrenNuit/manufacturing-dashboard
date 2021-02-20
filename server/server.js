const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const oeeRouter = require("./routes/oeeRouter.js");

app.use(bodyParser.json());
app.use(express.static("server/public"));
app.use(`/api/oee`, oeeRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
