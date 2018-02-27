const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema({}); //--> takes an object

mongoose.model("Article", ArticleSchema);