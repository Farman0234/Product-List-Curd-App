const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const app = express();
const path = require("path");
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5400;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => console.log(err))

const ProductRoute = require("./Routes/ProductRoute")

app.use("/api/products", ProductRoute);

app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "Public"))); 
