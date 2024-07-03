import mongoose  from "mongoose";

const db =async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log("error",error)
    }
}
export default db