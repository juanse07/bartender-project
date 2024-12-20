import express from "express";
import * as BarServiceQuotationController from "../controllers/BarServiceQuotation";

const router = express.Router();

router.get("/",BarServiceQuotationController.getBarServiceQuotations);
router.post("/",BarServiceQuotationController.createBarServiceQuotation);

export default router;