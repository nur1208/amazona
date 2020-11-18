import Express from "express";
// import data from "../birthday-remander/src/data";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World");
  console.log(data.products);
  res.json(data.products);
});

app.listen(port, () => console.log("server at http://localhost:" + port));
