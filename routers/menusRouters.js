import express from "express";
import { menus } from "../db.js";
export const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
  res.send(menus);
});
