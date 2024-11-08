import mongoose from 'mongoose';
const mongoUri = "mongodb://localhost:27017/?tls=false&readPreference=primary&directConnection=true"
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("connected successfully");
    } catch (error) {
        console.log("error connecting to mongoDB", error);
    }
}

export default connectDB;