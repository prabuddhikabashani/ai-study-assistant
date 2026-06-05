const express = require("express");
const cors = require("cors");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const multer = require("multer");
const {extractKeywords} = require("./nlp");

const upload = multer({
    dest: "uploads/"
});

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

app.post("/upload", upload.single("pdf"), async (req, res) => {

    try {

        const filePath = req.file.path;

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdfParse(dataBuffer);

        const keywords = extractKeywords(pdfData.text);

        console.log(pdfData.text);
        console.log(keywords);

        res.json({
            message: "PDF processed successfully!",
            keywords:keywords
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error processing PDF"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});