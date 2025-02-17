import mongoose from 'mongoose';

interface IApnsToken {
    userId: string;
    apnsToken: string;
    createdAt: Date;
    updatedAt: Date;
}

const apnsTokenSchema = new mongoose.Schema<IApnsToken>({
    userId: { type: String, required: true, unique: true },
    apnsToken: { type: String, required: true },
}, { timestamps: true });

export const ApnsToken = mongoose.model<IApnsToken>('ApnsToken', apnsTokenSchema);