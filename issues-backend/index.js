const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(cors());
// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", routes);

// Start the server
app.listen(3030, () => console.log("Server started on port 3030"));
