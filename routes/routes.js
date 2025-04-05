import {
  userApiGet,
  home,
  userApiCreate,
} from "../controller/userapi.controllet.js";
import express from "express";
let router = express.Router();

router.get("/", home);
router.get("/api/user", userApiGet);
router.post("/api/user", userApiCreate);
export default router;
