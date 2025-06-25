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
app.get("/search", async (req,res)=>{
    const name = req.query.fullname
    if(!name){
        return res.status(400).json({message : "Name required"})
    }
    const results = await Account.find({fullname : name})
    res.json(results)
})



app.listen(PORT,()=> console.log("port listening"))