const ProductModel = require("../Model/ProductModel");


module.exports.saveProduct = async (req, res) => {
    try {
        let body = req.body
        if (
            !body.productName
            || !body.productprice
            || !body.CurrencyCode
            || !body.numberOfSale
            || !body.productRaitng
            || !body.Dropshipping
            || !body.shopName
        ) {
            res.status(400).send({
                message: `required Field is missing, all fields are required:
                productName
                productprice
                CurrencyCode
                numberofSale
                productRaitng
                Dropshipping
                shopName`
            })
            return;
        }
        let results = await ProductModel.create({
            productName: body.productName,
            productprice: body.productprice,
            CurrencyCode: body.CurrencyCode,
            numberOfSale: body.numberOfSale,
            productRaitng: body.productRaitng,
            Dropshipping: body.Dropshipping,
            shopName: body.shopName
        })
        console.log("result", results);
        res.status(201).send({ message: "product is added in database" })

    } catch (error) {
        console.log("error in db", error)
        res.status(500).send({ message: "db error in saving Product" })
    }
}


module.exports.getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({}).exec();

        res.status(200).send({
            message: "Product list successfully fetched",
            data: products,
        });
    } catch (err) {
        console.error("Error in fetching products:", err);
        res.status(500).send({
            message: "Database error fetching products",
            error: err.message,
        });
    }
};
module.exports.deleteProduct = async (req, res) => {
    let _id = req.params.id;
    try {
        const product = await ProductModel.findByIdAndDelete(_id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        console.log("Deleted product:", product);
        res.status(200).send({ message: "Produt deleted Successfully" });
        return;
    }
    catch (err) {
        console.error("Error in deleting product:", err);
        res.status(500).send({ message: "Database error deleting product" });
    }
}

module.exports.updateProduct = async(req,res) =>{
    let _id = req.params.id
    let body = req.body
    try{
        const product = await ProductModel.findByIdAndUpdate(_id,body);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({ message: "Product updated Successfully" });
        return;
    }
    catch(err){
        console.log("Error in updating product:", err);
        res.status(500).send({ message: "Database error updating product" });
    }
}