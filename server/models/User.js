import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    googleId: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
