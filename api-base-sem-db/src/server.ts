import express from "express"

const app = express();

app.get('/', (req, res) => res.json({ message: "server is running" }))

app.listen(8080, () => console.log("Server is running"))