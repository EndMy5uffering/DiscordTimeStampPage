const express = require("express")
const fs = require("fs")
const { send } = require("./ResultHandler")

const app = express()

app.get("/", send("./html/index.html", "html"))
app.get("/assets/icon", send("./assets/discordIco.webp", "webp"))
app.get("/css/index.css", send("./css/index.css", "css"))
app.get("/js/convertTime.js", send("./js/convertTime.js", "js"))

app.get("*", (req, res) => console.log(req.path))

app.listen(80, () => console.log("Server is listening on port: 80 (http://localhost:80)"));