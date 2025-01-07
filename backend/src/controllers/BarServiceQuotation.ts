import { RequestHandler } from 'express';
import BarServiceQuotationModel from '../models/BarServiceQuotation';
import { io } from "../server"; // Import the `io` instance

export const getBarServiceQuotations: RequestHandler = async (req, res, next) => {
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
    state?: string;
}



export const createBarServiceQuotation: RequestHandler<unknown, unknown, BarServiceQuotationBody, unknown> = async (req, res, next) => {
    try {
        const newBarServiceQuotation = await BarServiceQuotationModel.create(req.body);
        res.status(201).json(newBarServiceQuotation);
        console.log('About to emit socket event for quotation:', newBarServiceQuotation._id);
        io.emit("newBarServiceQuotation", newBarServiceQuotation);
        console.log('Socket event emitted successfully');
    } catch (error) {
        console.error("Error creating quotation:", error);
        res.status(500).json({ error });
        next(error);
    }
};



// export const createBarServiceQuotation: RequestHandler<unknown, unknown, BarServiceQuotationBody, unknown> = async (req, res, next) => {
//     const { 
//         clientName, 
//         companyName,
//         email,
//         phone, 
//         address, 
//         eventDate, 
//         startTime, 
//         endTime, 
//         numberOfGuests, 
//         servicesRequested,
//         notes 
//     } = req.body;

//     try {
//         const state = 'pending'; // Default state
//         // Create the quotation data object with explicit state
//         const quotationData = {
//             clientName,
//             companyName,
//             email,
//             phone,
//             address,
//             eventDate,
//             startTime,
//             endTime,
//             numberOfGuests,
//             servicesRequested,
//             notes,
//             state
//         };

//         const newBarServiceQuotation = await BarServiceQuotationModel.create(quotationData);
        
//         res.status(201).json(newBarServiceQuotation);
//         console.log('About to emit socket event for quotation:', newBarServiceQuotation._id);
//         io.emit("newBarServiceQuotation", newBarServiceQuotation);
//         console.log('Socket event emitted successfully');
//     } catch (error) {
//         console.error("Error creating quotation:", error);
//         res.status(500).json({ error });
//         next(error); // Changed from next() to next(error)
//         // Removed alert as it's not available in Node.js environment
//     }
// };