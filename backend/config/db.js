import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${connect.connection.host} `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.emit(1); //Exit from process
  }
};
export default connectDB;
