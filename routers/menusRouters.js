import express from "express";
import { menus } from "../db.js";
export const menuRouter = express.Router();

menuRouter.get("/", (req, res) => {
  let filterdMenus = [];
  if (req.query) {
    const { name, mcid } = req.query;

    if (name) {
      const menuName = name.toLocaleLowerCase().replace(/\s/g, "");
      filterdMenus = menus.filter(
        (item) => item.name.toLocaleLowerCase().replace(/\s/g, "") === menuName
      );
    }

    if (mcid) {
      filterdMenus = menus.filter((item) =>
        item.menuCategoryIds.includes(Number(mcid))
      );
    }

    if (filterdMenus.length) {
      return res.send(filterdMenus);
    } else {
      return res.send({ error: "No menus found!" });
    }
  }

  res.send(menus);
});

menuRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  const filteredMenu = menus.find((item) => item.id === Number(id));
  if (filteredMenu) {
    res.send(filteredMenu);
  } else {
    res.status(404).send({ error: "Menu not found !!" });
  }
});
