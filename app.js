require("dotenv").config();
const express = require("express");
const dbConnect = require('./config/mongo')
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000;

// aqui invocamos a las rutas
// localhost/api/______
app.use("/api", require("./routes"));


app.listen(port, () => {
    console.log("tu app esta lista por http://localhost:" + port);
});

dbConnect();
