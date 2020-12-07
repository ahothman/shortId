import React, { useState } from "react";

const UrlGenerator = () => {
    const [shortUrl, setShortUrl] = useState("");
    const [url, setUrl] = useState("");
    const [err, setErr] = useState("");

    const generateUrl = () => {
        fetch(`http://localhost:3001/generate?url=${url}`, {
            method: "POST",
        })
            .then((res) => {
                if (!res.ok) throw new Error("A valid url need to be provided");
                return res.json();
            })
            .then((res) => {
                setShortUrl(res.shortUrl);
                setErr("");
            })
            .catch((err) => {
                setErr(err.message);
                setShortUrl("");
            });
    };

    return (
        <div style={{ width: "500px", margin: "0 auto", marginTop: "100px" }}>
            <input
                type="text"
                value={url}
                placeholder="url"
                onChange={(e) => setUrl(e.target.value)}
            ></input>
            <button onClick={generateUrl} style={{ marginLeft: "20px" }}>
                Generate ShortUrl
            </button>
            <p>{shortUrl}</p>
            <p>{err}</p>
        </div>
    );
};

export default UrlGenerator;
