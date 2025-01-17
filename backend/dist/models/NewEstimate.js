"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NewEstimateSchema = new mongoose_1.Schema({
    eventType: {
        type: String,
        trim: true
    },
    eventTypeOther: {
        type: String,
        trim: true
    },
    guestCount: {
        type: String,
        trim: true
    },
    guestCountOther: {
        type: String,
        trim: true
    },
    eventDate: {
        type: Date,
    },
    otherDate: {
        type: String,
        trim: true
    },
    eventTime: {
        type: String,
        required: true
    },
    contactName: {
        type: String,
        trim: true
    },
    contactEmail: {
        type: String,
        trim: true
    },
    contactPhone: {
        type: String,
        trim: true
    },
    eventLocation: {
        type: String,
        trim: true
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
exports.default = (0, mongoose_1.model)('NewEstimate', NewEstimateSchema);
