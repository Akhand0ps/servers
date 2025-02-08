const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input. Please provide numbers.");
    }

    res.send((a + b).toString());
});

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});
