const express = require("express");
const path = require("path");
const cors = require("cors");
const menuRouter = require("./routes/menuRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();

app.use(cors());
app.use(express.json({extended: true}));

app.use("/menu", menuRouter);
app.use("/order", orderRouter);

const PORT = process.env.PORT || 4000;

function start() {
    try{
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }catch (e) {
        console.log(e)
    }
}

start();