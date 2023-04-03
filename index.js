const express = require("express");
const app = require("express")();
const http = require("http").Server(app);
const path = require("path");
const fs = require("fs");
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "templates"));
app.use("/src", express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  let visitsFile = fs.readFileSync("./data/visits.json", "utf-8");
  let visits = JSON.parse(visitsFile);
  visits["visits"]++;
  visitsFile = JSON.stringify(visits, null, 4);
  fs.writeFileSync("./data/visits.json", visitsFile, "utf-8");
  res.render("index");
});

app.get("/visits", (req, res) => {
  let visitsFile = fs.readFileSync("./data/visits.json", "utf-8");
  let visits = JSON.parse(visitsFile);
  res.send(visits);
});

app.get("/chara", (req, res) => {
  res.render("chara");
});

app.get("/email", (req, res) => {
  res.send(`<center><h1><b>vocelia@outlook.jp</b></h1></center>`);
});

app.get("/matrix", (req, res) => {
  res.send(`<center><h1><b>vocelia@silk.ms</b></h1></center>`);
});

http.listen(port, () => {
  console.log("Listening on: ", port);
});
