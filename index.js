import express from "express";
import { menuRouter } from "./routers/menusRouters.js";
import { menuCategoriesRouter } from "./routers/menuCategoriesRouter.js";
import cors from "cors";
//express server
const app = express();
const PORT = 5005;
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
//use router
app.use("/api/v1/menus", menuRouter);
app.use("/api/v1/menu-categories", menuCategoriesRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => console.log("server running on port :", PORT));
