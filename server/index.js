const express = require("express");
const shortid = require("shortid");
const cors = require("cors");

const app = express();
app.use(cors());
const urlMap = new Map();
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

app.post("/generate", (req, res) => {
    const { url } = req.query;
    if (!url || !urlRegex.test(url))
        return res.status(400).json({ msg: "A valid url need to be provided" });

    // return the same hash for the same url
    if (!urlMap.has(url)) {
        const shortUrl = `http://fake-domain/${shortid.generate()}`;
        urlMap.set(url, shortUrl);
    }

    res.status(200).json({ shortUrl: urlMap.get(url) });
});

app.listen(3001, () => {
    console.log("server started");
});
