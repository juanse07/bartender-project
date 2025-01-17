import { NewEstimate } from "@/models/newEstimate";
import axios from "@/network/axiosInstance";
import { AxiosError } from "axios";
interface CreateNewEstimateValues{
    
    eventType: string;
    eventTypeOther?: string;
    guestCount: string;
    guestCountOther?: string;
    eventDate: string;
    eventTime: Date;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    eventLocation?: string;
    notes?: string;
    
    // Add this line
  
}

export async function createNewEstimate(input: CreateNewEstimateValues) {

    try {
        const response = await axios.post<NewEstimate>('/new-estimates', input);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('API Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to create new estimate.');
        }
        throw error;
    }
}

export const createEventQuestionnaire = async (data: any) => {
  const response = await axios.post('/api/event-questionnaire', data);
  return response.data;
};