import EventQuestionnaire from '@/components/forms/EventQuestionnaire';
import { useRouter } from 'next/router';

export default function BookEventPage() {
  const router = useRouter();

  // useEffect(() => {
  //   document.title = 'Estimate Event | Eventable';
    
  //   // Properly configure router events
  //   const handleRouteChange = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <div>
      <EventQuestionnaire />
    </div>
  );
}