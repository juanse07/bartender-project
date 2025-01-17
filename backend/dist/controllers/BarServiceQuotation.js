"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBarServiceQuotation = exports.createNewEstimate = exports.createBarServiceQuotation = exports.getBarServiceQuotationsbystate = exports.getBarServiceQuotations = void 0;
const BarServiceQuotation_1 = __importDefault(require("../models/BarServiceQuotation"));
const NewEstimate_1 = __importDefault(require("../models/NewEstimate"));
const server_1 = require("../server");
const getBarServiceQuotations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBarServiceQuotations = yield BarServiceQuotation_1.default.find().exec();
        res.status(200).json(allBarServiceQuotations);
    }
    catch (error) {
        next(error);
    }
});
exports.getBarServiceQuotations = getBarServiceQuotations;
const getBarServiceQuotationsbystate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { state } = req.query; // Extract the `state` query parameter
        // Build the filter based on the `state` parameter
        const filter = state ? { state } : {};
        const barServiceQuotations = yield BarServiceQuotation_1.default.find(filter).exec();
        res.status(200).json(barServiceQuotations);
    }
    catch (error) {
        next(error);
    }
});
exports.getBarServiceQuotationsbystate = getBarServiceQuotationsbystate;
const createBarServiceQuotation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quotationData = req.body;
        console.log("Quotation data before creation:", quotationData);
        const newBarServiceQuotation = yield BarServiceQuotation_1.default.create(quotationData);
        console.log("Created quotation:", newBarServiceQuotation);
        res.status(201).json(newBarServiceQuotation);
        console.log('About to emit socket event for quotation:', newBarServiceQuotation._id);
        // io.emit("newBarServiceQuotation", newBarServiceQuotation);
        console.log('Socket event emitted successfully');
    }
    catch (error) {
        console.error("Error creating quotation:", error);
        next(error);
    }
});
exports.createBarServiceQuotation = createBarServiceQuotation;
const createNewEstimate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estimateData = req.body;
        console.log("Estimate data before creation:", estimateData);
        const newEstimate = yield NewEstimate_1.default.create(estimateData);
        console.log("Created estimate:", newEstimate);
        res.status(201).json(newEstimate);
        console.log('About to emit socket event for estimate:', newEstimate._id);
        server_1.io.emit("newEstimate", newEstimate);
        console.log('Socket event emitted successfully');
    }
    catch (error) {
        console.error("Error creating estimate:", error);
        next(error);
    }
});
exports.createNewEstimate = createNewEstimate;
const updateBarServiceQuotation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quotationId = req.params.id;
        const { state } = req.body;
        if (!["pending", "answered", "approved"].includes(state)) {
            res.status(400).json({
                error: "Invalid state value. Must be 'pending', 'answered', or 'approved'"
            });
            return;
        }
        const updatedQuotation = yield BarServiceQuotation_1.default.findByIdAndUpdate(quotationId, { state }, { new: true });
        if (!updatedQuotation) {
            res.status(404).json({ error: "Quotation not found" });
            return;
        }
        // Emit socket event for the update
        server_1.io.emit('quotationUpdated', updatedQuotation);
        res.json(updatedQuotation);
    }
    catch (error) {
        next(error);
        console.error("Error updating quotation:", error);
        res.status(500).json({
            error: "Failed to update quotation",
            details: error instanceof Error ? error.message : "Unknown error"
        });
    }
});
exports.updateBarServiceQuotation = updateBarServiceQuotation;
