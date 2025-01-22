// mk dir "201-express-server"
// touch index.js
// netstat -ano | findstr "LISTENING"

// install nodemon as npm install -g nodemon
// -g stands for globally
// npm root -g to find the package
// Listing Installed Global Packages => npm list -g --depth=0

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //request and response
  console.log(req.rawHeaders);
  res.send("<h1> Hello World! <h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My Contact</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
