const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
     productName: String,
     productprice: Number,
    CurrencyCode: String,
    numberOfSale: Number,
    productRaitng: Number,
    Dropshipping: Boolean,
    shopName: String,
    createdOn: { type: Date, default: Date.now }, 
})

module.exports = mongoose.model("ProductList", productSchema)