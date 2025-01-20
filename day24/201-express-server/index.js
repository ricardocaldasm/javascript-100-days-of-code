// mk dir "201-express-server"
// touch index.js
// netstat -ano | findstr "LISTENING"

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //request and response
  console.log(req.rawHeaders);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
