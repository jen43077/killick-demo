const router = require("express").Router();

router.get("/", function (req, res, next) {
    return res.json({ response: "Yep, articles, working on it." });
});

module.exports = router;

