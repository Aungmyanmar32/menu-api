import express from "express";

const app = express();
const PORT = 5005;

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => console.log("server running on port :", PORT));
