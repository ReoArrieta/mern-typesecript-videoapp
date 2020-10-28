import { Router } from "express";
import * as videoCtrl from "./videos.controller";

const router = Router();

router.post('/videos', videoCtrl.create);
router.get("/videos", videoCtrl.read);
router.get('/videos/:id', videoCtrl.readOne);
router.put('/videos/:id', videoCtrl.update);
router.delete('/videos/:id', videoCtrl.deleted);

export default router;
