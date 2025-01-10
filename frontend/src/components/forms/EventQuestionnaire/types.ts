// components/forms/EventQuestionnaire/types.ts
export type QuestionType = 'select' | 'date' | 'time' | 'textarea';

export interface EventTime {
    start: string;
    end: string;
  }

  export interface FormData {
    eventType: string;
    eventTypeOther: string;
    guestCount: string;
    guestCountOther: string;
    eventDate: string;
    eventTime: EventTime;
    notes: string;
    [key: string]: string | EventTime; // Add index signature
  }

export interface Question {
  id: 'eventType' | 'guestCount' | 'eventDate' | 'eventTime' | 'notes';
  title: string;
  type: QuestionType;
  options?: string[];
}



  