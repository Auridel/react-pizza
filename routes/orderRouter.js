const {Router} = require("express");
const router = Router();

router.post("/", (req, res) => {
    res.status(200).json({message: "ok"});
})

module.exports = router;