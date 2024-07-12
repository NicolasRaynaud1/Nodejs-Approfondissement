const NotFoundError = require("../../errors/not-found");
const ForbiddenError = require('../../errors/forbidden');
const articleService = require('./articles.service');
const UnauthorizedError = require("../../errors/unauthorized");

class ArticleController {
    async create(req, res, next) {
        try {
            const articleToCreate = {
                title: req.body.title,
                content: req.body.content,
                user: req.user.id
            }
            const article = await articleService.create(articleToCreate);
            req.io.emit("article:create", { article });
            res.status(201).json(article);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            console.log(req.user.role);
            if (req.user.role != "admin") {
                throw new ForbiddenError;
            }

            const articleModified = await articleService.update(req.params.id, req.body);
            req.io.emit("article:update", { articleModified });
            res.json(articleModified);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            console.log(req.user.role);
            if (req.user.role != "admin") {
                throw new ForbiddenError;
            }

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