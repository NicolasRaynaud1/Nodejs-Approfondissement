const Article = require("./articles.schema");

class ArticleService {
    async create(data) {
        const article = new Article(data);
        return article.save();
    }

    update(id, data) {
        return Article.findByIdAndUpdate(id, data, { new: true });
    }
}

module.exports = new ArticleService();