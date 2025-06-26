import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import Account from "./model/Accounts.js"

const app = express()

const PORT = process.env.PORT
app.use(express.json())
const db = await mongoose.connect(process.env.MONGO_URL)

app.get("/balance/:fullname", async (req, res) => {
  const name = req.params.fullname
  const account = await Account.findOne({ fullname: name })
  res.json({
    fullname: account.fullname,
    accountbalance: account.accountbalance,
  })
})

app.get("/accounts", async (req, res) => {
  const accounts = await Account.find({}, { accountbalance: 0 })
  res.json(accounts)
})
app.get("/search", async (req, res) => {
  const name = req.query.fullname

  const results = await Account.find({ fullname: name })
  res.json(results)
})
app.post("/newaccount", async (req, res) => {
  try {
    const { fullname, phone, accountbalance } = req.body

    if (!fullname || !phone || accountbalance == null) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const account = new Account({ fullname, phone, accountbalance })
    const result = await account.save()
    res.status(201).json(result)
  } catch (error) {
  
    res.status(500).json({ message: "error", error: error.message })
  }
})

app.listen(PORT, () => console.log("port listening"))
