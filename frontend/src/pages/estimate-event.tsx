import EventQuestionnaire from '@/components/forms/EventQuestionnaire';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
export default function BookEventPage() {
  const router = useRouter();


  return (
    <div>
      <EventQuestionnaire />
    </div>
  );
}