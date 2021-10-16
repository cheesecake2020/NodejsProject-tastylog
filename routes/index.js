const router = require("express").Router();
// ejsはviewsフォルダから呼び出す
router.get("/", (req, res) => {
    res.render("./index.ejs");
});

module.exports = router;