import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
	{
		taskName: { type: String, required: true, trim: true, unique: true },
	     status: {
    type: String,
    enum: ["TODO", "IN_PROGRESS", "DONE"],
    default: "TODO",
    required: true,
  },
		userID: { 
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
         },
		description: { type: String, required: true },
	},
	{ timestamps: true, collection: "tasks" }
);

export const Task = mongoose.model("Task", taskSchema, "tasks");