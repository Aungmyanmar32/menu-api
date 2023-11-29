import express from "express";
import { menuCategories } from "../db.js";
export const menuCategoriesRouter = express.Router();

menuCategoriesRouter.get("/", (req, res) => {
  res.send(menuCategories);
});
