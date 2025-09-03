import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true }
    },
    { timestamps: true, collection: "users" }
);

userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "userID",
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

export const User = mongoose.model("User", userSchema, "users");