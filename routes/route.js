const {Router} = require("express");
const router = Router();
const menu = require("../menu.json");

router.get("/", (req, res) => {
    res.json(menu);
})

module.exports = router;