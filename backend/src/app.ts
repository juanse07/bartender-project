import "dotenv/config";
import express from "express";
import BarServicequotationRoutes from "./routes/BarServiceQuotation";


const app = express();

app.use(express.json());

app.use("/bar-service-quotations", BarServicequotationRoutes);


export default app;