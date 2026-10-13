import { Router } from "express"
import { createWriteStream } from 'node:fs'
import { mkdir } from "node:fs/promises";
import db from "../database-connection/connection.js"
import fileHandler from '../handlers/fileHandler.js'

const router = Router()

router.post("/files", async (req, res) => {
  const infsToRegister = fileHandler(req)
  const userName = infsToRegister.user_name
  const fileName = infsToRegister.file_name
  await mkdir(`./cloud/${userName}/`, { recursive: true })
  const WriteFileStream = createWriteStream(`./cloud/${userName}/${fileName}`)
  
  req.pipe(WriteFileStream)

  WriteFileStream.on("finish", async ()=>{
    await db.query("INSERT INTO files(id, user_id, file_name, mime_type, size, path) VALUES ($1, $2, $3, $4, $5, $6)", Object.values(infsToRegister))
    return res.json({
      msg: "File successfully received!",
      status: "success"
    })
  })

  WriteFileStream.on("error", (error)=>{
    console.log(error)
    return res.status(500).send("Internal Server Error, try again later")
  })

})


export default router
