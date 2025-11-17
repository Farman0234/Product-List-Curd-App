const { error } = require('console');
const multer = require('multer');
const path = require('path');

// Set up storage 

const storage = multer.diskStorage({
destination:function(req,file,cd){
    cd(null,"uploads/")
},
filename:function(req,file,cd){
    const uniquename = Date.now() + "-" + Math.round(Math.random()*1E9)
    cd(null,uniquename+ path.extname(file.originalname))
}
});
const filter = (req,file,cd) => {
    if(file.mimetype.startsWith("image/")){
        cd(null,true)
    }else{
        cd(new error("onlyimages are allowed"),false)
    }
};

const upload = multer({storage,filter})
module.exports = upload;
