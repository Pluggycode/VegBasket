import express from 'express'
import { addveg,listvegs,removeFood } from "../controlers/addveg.js";
import multer from 'multer'


const vegRouter = express.Router();

// image storage engine 

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

vegRouter.post("/add",upload.single("image"),addveg)
vegRouter.get("/list",listvegs)
vegRouter.post("/remove",removeFood);






export default vegRouter;