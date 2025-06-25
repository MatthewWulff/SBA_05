import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import Account from "./model/Accounts.js"

const app = express()

const PORT = process.env.PORT
app.use(express.json())
const db = await mongoose.connect(process.env.MONGO_URL)


app.get("/accounts" , async(req,res)=>{
    const accounts = await Account.find({}, {accountbalance:0})
    res.json(accounts)
})



app.listen(PORT,()=> console.log("port listening"))