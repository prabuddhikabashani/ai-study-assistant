const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("AI Study Assistant Backend Running!");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from the backend!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});