import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(`mongodb+srv://teetwalhartik:258012@cluster0.tthoz.mongodb.net/food-del`).then(()=>console.log("DB Connected"))
}
