import express from "express";
import * as apnsController from "../controllers/apns";

const router = express.Router();

router.post("/register-device", apnsController.registerDevice);
