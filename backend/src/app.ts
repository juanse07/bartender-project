import cors from "cors";
import "dotenv/config";
import express from "express";
import env from "./env";
import BarServicequotationRoutes from "./routes/BarServiceQuotation";


const app = express();

app.use(express.json());

app.use(cors({
    origin: env.WEBSITE_URL,
    credentials: true
}));

app.use("/bar-service-quotations", BarServicequotationRoutes);


export default app;