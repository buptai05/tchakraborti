const express = require("express");
const router = express.Router();
router.get('/', (req,res)=>{res.sendfile("index.html")}
    
);

router.get('/registration', (req,res)=>{res.sendfile("registrationpage.html")}
    
);

router.get('/login', (req,res)=>{res.sendfile("loginpage.html")}
    
);
module.exports = router;