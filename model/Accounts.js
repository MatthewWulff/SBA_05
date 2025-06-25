import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 10,
  },
  accountbalance: {
    type: Number,
    default: 0,
  },
})

export default mongoose.model("Account", accountSchema)
