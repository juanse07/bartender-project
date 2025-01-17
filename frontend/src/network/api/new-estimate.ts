import { NewEstimate } from "@/models/newEstimate";
import api from "@/network/axiosInstance";
import { AxiosError } from "axios";
interface CreateNewEstimateValues{
    
    eventType: string;
    eventTypeOther?: string;
    guestCount: string;
    guestCountOther?: string;
    eventDate: Date;
    eventDateOther?: string;
    eventTime: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    eventLocation?: string;
    notes?: string;
    
    // Add this line
  
}

export async function createNewEstimate(input: CreateNewEstimateValues) {

    try {
        const response = await api.post<NewEstimate>('/new-estimates', input);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('API Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to create new estimate.');
        }
        throw error;
    }
}

