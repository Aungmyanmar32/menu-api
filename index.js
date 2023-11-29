import express from "express";
import { menuRouter } from "./routers/menusRouters.js";

const app = express();
const PORT = 5005;
app.use(express.json());

app.use("/api/v1/menus", menuRouter);
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => console.log("server running on port :", PORT));
