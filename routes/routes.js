import { Router } from "express";
import uploadFileRoute from "./fileUpload.js"

const router = Router()

router.use(uploadFileRoute)

export default router
