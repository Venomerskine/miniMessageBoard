require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text_message VARCHAR(255),
  username VARCHAR(50),
  date_added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (text_message, username, date_added)
VALUES
  ('Hello everyone!', 'leencoln', '2024-01-01'),
  ('Has anyone seen my keys?', 'sara_smith', '2024-01-02'),
  ('Node.js is pretty cool so far.', 'dev_dan', '2024-01-03'),
  ('Does this database look big to you?', 'big_tuna', '2024-01-04'),
  ('Just finished my first SQL script!', 'coder_gal', '2024-01-05');
`;

async function main() {
  console.log("Seeding database...");
  
  // Uses the variables from your .env automatically if they match pg defaults
  // or you can pass the config object like we did with Pool
  const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Done! 5 messages added.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();