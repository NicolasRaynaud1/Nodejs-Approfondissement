const express = require("express");
const articleController = require("./articles.controller");
const articleRouter = express.Router();

articleRouter.post("/", articleController.create);
articleRouter.put("/:id", articleController.update);

module.exports = articleRouter;