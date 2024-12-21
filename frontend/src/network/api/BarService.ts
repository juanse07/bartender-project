import { BarServiceQuotation } from "@/models/BarServiceQuotation";
import api from "@/network/axiosInstance";
interface CreateBarServiceValues{
    
    clientName: string;
    companyName?: string;
    email: string;
    phone?: string;
    address: string;
    eventDate: Date;
    startTime: string;
    endTime: string;
    numberOfGuests: number;
    servicesRequested: string[] | undefined;
    notes?: string;
    
    
    // Add this line
  
}
// Compare this snippet from backend/src/models/BarServiceQuotation.ts:
export async function createBarService(input: CreateBarServiceValues) {
    const response = await api.post<BarServiceQuotation>('/bar-service-quotations', input);
    return response.data;
  
}