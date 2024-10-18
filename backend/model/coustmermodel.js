import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email should be unique for each user
  },
  mobile: {
    type: Number,
    required: true,
  },
});

const user = model("coustmer_details", userSchema);
export default user;
