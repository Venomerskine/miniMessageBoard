const express =  require('express')
const router =  express.Router()


router.get("/", (req, res) => {
    res.render("form")
})
router.post("/", controller.addMessage);

module.exports = router