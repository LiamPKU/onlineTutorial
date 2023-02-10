import express from "express"
const router = express.Router()
import { getVideo,getVideoDetail,commentVideo } from "../controllers/video.js"

router.post("/:id",getVideo)
router.get("/:id",getVideoDetail)
router.post('/:id/commentVideo', commentVideo);
export default router