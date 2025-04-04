import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("databaseconnected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/image_gen`);
};
export default connectDB;
