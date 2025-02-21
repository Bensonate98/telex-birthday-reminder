import express from "express";
const router = express.Router();
import { integrationJsonContrl, checkBirthdaysForTelex } from "./controllers.js"


//json url
router.get("/integration.json", integrationJsonContrl);
//Tick url
router.post("/check-birthdays", checkBirthdaysForTelex);

export default router;
