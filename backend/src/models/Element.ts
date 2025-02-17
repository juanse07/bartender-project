import mongoose from 'mongoose';

interface IElement {
    userId: string;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}

const elementSchema = new mongoose.Schema<IElement>({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
}, { timestamps: true });

export const Element = mongoose.model<IElement>('Element', elementSchema); 