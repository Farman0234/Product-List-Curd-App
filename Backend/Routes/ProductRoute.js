const {Router}= require("express")

const {saveProduct,getProducts,deleteProduct,updateProduct} = require("../controller/Productcontroller");

const router = Router();

router.post("/save",saveProduct);
router.get("/get",getProducts);
router.delete("/delete/:id",deleteProduct);
router.put("/update/:id",updateProduct);

module.exports = router;