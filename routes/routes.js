import { Router } from "express"
import uploadFileRoute from "./fileUpload.js"
import sigupRoute from "./signup.js"

const router = Router()

router.use(uploadFileRoute)
router.use(sigupRoute)

export default router
