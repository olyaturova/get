const ShopModel=require('./ShopModel');

module.exports.getShop=async(req,res)=>{
    const myShop=await ShopModel.find();
    res.send(myShop)
}

module.exports.saveShop=async(req,res)=>{
    const{title}=req.body;
    ShopModel.create({title})
    .then((data)=>{console.log('Purchase added')
    res.send(data)
})
}
module.exports.deleteShop=async(req,res)=>{
    const{_id}=req.body;
    ShopModel.findByIdAndDelete(_id)
    .then(()=>res.send('Delete a purchase'))
}
module.exports.editShop=async(req,res)=>{
    const{_id,title}=req.body;
    ShopModel.findByIdAndUpdate(_id,{title})
    .then(()=>res.send('Edited a purchase'))
}