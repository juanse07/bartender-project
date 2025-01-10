import EventQuestionnaire from '@/components/forms/EventQuestionnaire';
import { useEffect } from 'react';

export default function BookEventPage() {
  useEffect(() => {
    document.title = 'Estimate Event | Eventable';
    window.scrollTo(0, 0);
  }, []);
  return <EventQuestionnaire />;
}