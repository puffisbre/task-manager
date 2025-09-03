import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
	if (!process.env.MONGO_DB_CONNECTION) throw new Error("Missing MONGODB_URI");
	await mongoose.connect(process.env.MONGO_DB_CONNECTION, {
		dbName: "TaskManager",
	});
	console.log("MongoDB connected");
}
