import express from "express";
import { menuCategories } from "../db.js";
export const menuCategoriesRouter = express.Router();

menuCategoriesRouter.get("/", (req, res) => {
  const { name } = req.query;
  let filteredMC;
  if (name) {
    const mcName = name.toLocaleLowerCase().replace(/\s/g, "");
    filteredMC = menuCategories.filter(
      (item) => item.name.toLocaleLowerCase().replace(/\s/g, "") === mcName
    );

    if (filteredMC.length) {
      return res.send(filteredMC);
    } else {
      return res.send({ error: "No menu category found" });
    }
  }
  res.send(menuCategories);
});

menuCategoriesRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  const filteredMC = menuCategories.find((item) => item.id === Number(id));
  if (filteredMC) {
    res.send(filteredMC);
  } else {
    res.status(404).send({ error: "Menu Category not found !!" });
  }
});
