import userModel from "../models/UserModel.js"

// add items to user cart 

const addToCart = async (res,req) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"added to Cart"});

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


// remove from cart 

const removeFromCart = async (res, req) => {

}

// fetch user cart data 

const getCart = async (req,res) => {

}

export {addToCart,removeFromCart,getCart}