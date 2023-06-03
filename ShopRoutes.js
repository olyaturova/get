const {Router}=require('express');
const{getShop,saveShop,deleteShop, editShop}=require('./ShopController');

const router=Router();

router.get('/',getShop);
router.post('/saveShop',saveShop)
router.post('/deleteShop',deleteShop)
router.post('/editShop',editShop)



module.exports=router;