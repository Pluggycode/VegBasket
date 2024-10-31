import mongoose  from "mongoose";

const vegSchema = new mongoose.Schema({
     name:{type:String,requried:true},
     description: {type:String, requried:true},
     price: {type:Number, requried: true},
     image:{type:String, requried: true},
     category:{type:String,required: true}
})

const vegmodel = mongoose.Model.veg || mongoose.model("veg",vegSchema)

export default vegmodel;