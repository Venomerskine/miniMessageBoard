const express =  require('express')
const router =  express.Router()
const messageController = require("../controllers/messageControleers")

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];


router.get("/", messageController.getMessages)
router.post("/new", messageController.addMessage)

router.get("/message/:id", messageController.showmessageDetails);




module.exports = router