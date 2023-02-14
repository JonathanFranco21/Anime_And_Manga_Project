// The data can be accessed when node index.js is
// typed into the console and when typing in
// localhost:3000/anime into Google Chrome, the
// information is shown. 

const Express = require("express");
const BodyParser = require("body-parser");

const app = Express();

app.use(BodyParser.json());

var anime = [
  {
    "name": "SPY X FAMILY",
    "release_year": "2022",
    "seasons": "1",
    "airing": "Yes"
  },
  {
    "name": "My Hero Academia",
    "release_year": "2016",
    "seasons": "6",
    "airing": "Yes"
  },
  {
    "name": "The Prince of Tennis",
    "release_year": "2003",
    "seasons": "7",
    "airing": "No"
  },
  {
    "name": "Haikyu!",
    "release_year": "2014",
    "seasons": "4",
    "airing": "No"
  }
];

app.get("/", (request, response) => {
    response.send(anime);
});

app.get("/name", (request, response) => {
  response.send(name);
});

app.listen(3001, () => {
    console.log("Listening at :3001...");
});