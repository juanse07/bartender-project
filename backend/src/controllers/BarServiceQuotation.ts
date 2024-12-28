import { RequestHandler } from 'express';
import BarServiceQuotationModel from '../models/BarServiceQuotation';
import { io } from "../server"; // Import the `io` instance

export const getBarServiceQuotations: RequestHandler = async (req, res,next) => {
try {
    const allBarServiceQuotations = await BarServiceQuotationModel.find().exec();

    res.status(200).json(allBarServiceQuotations);
} catch (error) {
   // res.status(500).json({error});
    next(error);
}

};
interface BarServiceQuotationBody {
    clientName: string;
    companyName?: string;
    email: string;
    phone?: string;
    address: string;
    eventDate: Date;
    startTime: string;
    endTime: string;
    numberOfGuests: number;
    servicesRequested?: string[];
    notes?: string;
} 

export const createBarServiceQuotation: RequestHandler<unknown, unknown, BarServiceQuotationBody, unknown> = async (req, res,next) => {
   
    const { clientName, companyName,email,phone, address, eventDate, startTime, endTime, numberOfGuests, servicesRequested, notes } = req.body;
   
    try {
   const newBarServiceQuotation = await BarServiceQuotationModel.create({
        clientName,
        companyName,
        email,
        phone,
        address,
        eventDate,
        startTime,
        endTime,
        numberOfGuests,
        servicesRequested,
        notes
    });

    res.status(201).json(newBarServiceQuotation);
    io.emit("newBarServiceQuotation", newBarServiceQuotation); // Emit a new event
    
   }    catch (error) {
    console.error("Error creating quotation:", error);
        res.status(500).json({error});
        next();
        alert("Error: Please try again" + error);
        
    }
};