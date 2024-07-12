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
        try {
            const articleModified = await articleService.update(req.params.id, req.body);
            res.json(articleModified);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            await articleService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ArticleController();