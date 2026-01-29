const db = require("../db/queries")

async function getMessages (req, res) {
    const messages = await db.getAllMessage()
    res.render("index", {messages})
}

async function addMessage(req, res) {
    const username = req.body.username
    const message = req.body.textMessage

    await db.addNewMessage(username, message)

    res.redirect("/")
}

async function showmessageDetails (req, res) {
    const id = req.params.id;
    const message = await db.getMessageById(id); 
    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("message", { message });
}

async function getMessages(req, res) {
  const messages = await db.getAllMessage();
  console.log("Message count:", messages.length);
  res.render("index", { messages });
}

module.exports = {
    getMessages,
    addMessage,
    showmessageDetails
}