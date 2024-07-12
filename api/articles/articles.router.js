const express = require("express");
const articleController = require("./articles.controller");
const articleRouter = express.Router();

articleRouter.post("/", articleController.create);

module.exports = articleRouter;