import express from "express";
import { menus } from "../db";
export const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
  res.send(menus);
});
