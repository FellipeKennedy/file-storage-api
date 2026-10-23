import express from "express"
import db from "../database-connection/connection.js"
import userHandler from "../handlers/userHandler.js"

const router = express.Router()
router.use(express.json())

router.post("/users", async(req, res)=>{
  const user = userHandler(req)
  console.log(user)
  res.send("slaaa")
})

export default router
