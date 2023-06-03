const mongoose=require ('mongoose');
const shopSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Shop', shopSchema)