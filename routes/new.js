const express =  require('express')
const router =  express.Router()


router.get("/", (req, res) => {
    res.render("form")
})
router.post("/", messageControleers.addMessage);

module.exports = router