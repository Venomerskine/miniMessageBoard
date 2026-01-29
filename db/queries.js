require("dotenv").config()
const pool = require("./pool")

async function getAllMessage() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows
}

async function addNewMessage(username, textContent) {
    const queryText = "INSERT INTO messages (username, text_message, date_added) VALUES ($1, $2, CURRENT_DATE)";
    const values = [username, textContent];
    
    await pool.query(queryText, values);
}

async function getMessageById(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

async function deleteMessageById(id) {
    await pool.query(
        "DELETE FROM messages WHERE id = $1",
        [id]
    )
}

module.exports = {
    getAllMessage,
    addNewMessage,
    getMessageById,
    deleteMessageById
}