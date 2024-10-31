import express from "express"
import cors from "cors"
import { connectDB } from "./config/Db.js"
import vegRouter from "./rourtes/vegroute.js"
import userRouter from "./rourtes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./rourtes/cartRourters.js"
import orderRouter from "./rourtes/orderRouter.js"



const app = express()
const port = 4000

// middleware 
app.use(express.json())
app.use(cors())


// db connection 
connectDB();


//api end point
app.use("/api/veg",vegRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)


app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,() => {
    console.log(`server started on http://localhost:${port}`)
})


//mongodb+srv://shashidhar:Sunny666$@cluster0.o6gqtgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0