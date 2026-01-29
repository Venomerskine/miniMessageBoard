const express =  require('express')
const router =  express.Router()
const messageController = require("../controllers/messageControleers")


router.get("/", messageController.getMessages)
router.post("/new", messageController.addMessage)

router.get("/message/:id", messageController.showmessageDetails);
router.post("/message/:id/delete", messageController.deleteMessage);





module.exports = router