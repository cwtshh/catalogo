require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

// json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// config
app.use(cors());

// banco de dados


// rotas
const router = require("./routes/Router.js");
app.use("/", router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
