const router = require("express").Router();
const mongoose = require("mongoose");
const Article = mongoose.model("Article");

router.get("/", function (req, res, next) {
    Article.find()
        .limit(5)
        .exec()
        .then(results => {
            return res.json({
                articles: results
            });
        })
        .catch(next);
});

module.exports = router;

