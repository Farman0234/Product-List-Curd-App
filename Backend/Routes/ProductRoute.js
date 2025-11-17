const {Router}= require("express")
const upload = require("../middleware/upload");
const {saveProduct,getProducts,deleteProduct,updateProduct,getProductById} = require("../controller/Productcontroller");

const router = Router();

router.post("/save",upload.single("Image"),saveProduct);
router.get("/get",getProducts);
router.get("/get/:id",getProductById);
router.delete("/delete/:id",deleteProduct);
router.put("/update/:id",upload.single("Image"),updateProduct);

module.exports = router;