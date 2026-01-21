const express =  require('express')
const router =  express.Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get("/", (req, res) => {
    res.render("index", {title: "Mini MessageBoard", messages: messages})
})

router.post("/new", (req, res) => {

    let messageText = req.body.textMessage
    let messageUser = req.body.userMessage
    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect("/")
})




module.exports = router