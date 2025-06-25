import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import Account from "./models/Account.js"

const app = express()

const PORT = process.env.PORT
app.use(express.json())
const db = await mongoose.connect(process.env.MONGO_URL)



app.listen(PORT,()=> console.log("port listening"))