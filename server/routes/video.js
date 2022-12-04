import express from "express"
const router = express.Router()
import { getVideo } from "../controllers/video.js"

router.post("/:id",getVideo)

export default router