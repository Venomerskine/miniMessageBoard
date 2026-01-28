CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text_message varchar(255),
    username varchar(50),
    date_added date
    );
