import { getFeaturedEvents } from './DUMMY_DATA';
import EventList from '../../components/event-list';

export default function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="w-screen h-screen bg-cyan-100 flex justify-center">
      <EventList items={featuredEvents} />
    </div>
  );
}
