import mongoose from "mongoose"

const accountSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
 
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
    required:true
  },
})

export default mongoose.model("Account", accountSchema)
