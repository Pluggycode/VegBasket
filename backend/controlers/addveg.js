import vegmodel from "../models/Vegmodel.js";
import fs from 'node:fs'
// add veg item
const addveg = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const veg = new vegmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    });
    try {
        await veg.save();
        res.json({ success: true, message: "item added" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });

    }

};
// all veg list
const listvegs = async (req,res) => {
    try{
        const foods = await vegmodel.find({});
        res.json({success:true,data:foods})
    }
    catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item

const removeFood = async (req,res) => {
    try {
        const veg = await vegmodel.findById(req.body.id);
        fs.unlink(`uploads/${veg.image}`, () => {})

        await vegmodel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"item removed"})
    }
    catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}
export { addveg,listvegs,removeFood}