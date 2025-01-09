import express from "express";
import * as BarServiceQuotationController from "../controllers/BarServiceQuotation";

const router = express.Router();

router.get("/",BarServiceQuotationController.getBarServiceQuotationsbystate);
router.post("/",BarServiceQuotationController.createBarServiceQuotation);
router.patch("/:id", BarServiceQuotationController.updateBarServiceQuotation);

export default router;