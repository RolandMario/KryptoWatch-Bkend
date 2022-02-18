const express = require('express');
const multer = require('multer')
const load = require('../controller/Load')
const submitCoin = require('../controller/SubmitCoin')
const Promoted = require('../controller/Promoted')
// const sendBannerInfo = require('../controller/SendBannerInfo')
const Test = require('../controller/Test')

const router = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
        
    }
})
const upload = multer({
    storage: storage,
     limits:{
    fileSize: 1024 * 1024 * 5
    }
})
    router.get('/', load)
    router.get('/promoted', Promoted)
    router.post('/submit-coin', upload.single('logo'), submitCoin);
   
    
      

// router.post('/banner-promotion', sendBannerInfo);


module.exports = router;