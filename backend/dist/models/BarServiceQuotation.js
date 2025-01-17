"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BarServiceQuotationSchema = new mongoose_1.Schema({
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    eventDate: {
        type: Date,
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    servicesRequested: {
        type: [String], // Array of strings for multiple services
        default: []
    },
    notes: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        enum: ['pending', 'answered', 'approved'],
        default: 'pending',
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('BarServiceQuotations', BarServiceQuotationSchema);
