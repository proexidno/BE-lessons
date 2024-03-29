const express = require("express"), app = express(), path = require("path"), cors  = require("cors");

const BlogRouter = require("./routes/blog-router");
const ContactRouter = require("./routes/contact-router");
const AboutRouter = require("./routes/about-router");
const GalleryRouter = require("./routes/gallery-router");
const TestRouter = require("./routes/test-router");
const SquareRouter = require("./routes/square-router");
const ApiRouter = require("./routes/api");
const RandomGiftRouter = require("./routes/rGift-router");

const PORT = 3000, URL = "127.0.0.1";


app.use(cors(
    {
        origin: "*"
    }
))

app.set("view engine", "hbs");

app.set("views",  __dirname + "/views");


app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/mainPage.html");
});

app.use("/api", ApiRouter);

app.use("/blog", BlogRouter);

app.use("/randomgift", RandomGiftRouter)

app.use("/about", AboutRouter);

app.use("/contact", ContactRouter);

app.use("/gallery", GalleryRouter);

app.use("/test", TestRouter);

app.use("/square", SquareRouter);

app.use((req, res, next) => {
    res.status(404).send("Page is not defined");
});


app.listen(PORT, URL, (err) => {
    if (err) {console.log(err)}
    else {console.log(`The server is started on http://${URL}:${PORT}`)}
});