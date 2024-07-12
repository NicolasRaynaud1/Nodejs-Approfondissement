const Article = require("./articles.schema");

class ArticleService {
    async create(data) {
        const article = new Article(data);
        return article.save();
    }
}

module.exports = new ArticleService();