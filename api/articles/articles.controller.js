const NotFoundError = require("../../errors/not-found");
const articleService = require('./articles.service');

class ArticleController {
    async create(req, res, next) {
        try {
            const article = await articleService.create(req.body);
            req.io.emit("article:create", { article });
            res.status(201).json(article);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const articleModified = await articleService.update(req.params.id, req.body);
            req.io.emit("article:update", { articleModified });
            res.json(articleModified);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            await articleService.delete(id);
            req.io.emit("article:delete", { id });
            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ArticleController();