import EventItem from './event-item.jsx';

export default function EventList({ items }) {
  return (
    <ul className="mt-16 flex flex-col gap-8">
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
