const express = require("express");
const app = express();
const PORT = 3000;

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

app.use(express.json());

app.get("/books", (_, res) => {
    res.send(books);
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});