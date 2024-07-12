const NotFoundError = require("../../errors/not-found");
const articleService = require('./articles.service');

class ArticleController {
    async create(req, res, next) {
        try {
            const article = await articleService.create(req.body);
            res.status(201).json(article);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {

    }

    async delete(req, res, next) {

    }
}

module.exports = new ArticleController();