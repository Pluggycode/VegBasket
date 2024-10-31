import mongoose from "mongoose";

export const connectDB = async () => {
     await mongoose.connect('mongodb+srv://shashidhar:Sunny666$@cluster0.o6gqtgk.mongodb.net/vegdel').then(() => console.log('DB connected'));
}