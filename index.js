import express from "express"
import mongoose from "mongoose"
import "dotenv/config"

const app = express()

const PORT = process.env.PORT

app.listen(PORT,()=> console.log("port listening"))