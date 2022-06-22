import Link from 'next/link';
import { useRouter } from 'next/router';
import AddressIcon from '../../components/icons/address-icon';
import DateIcon from '../../components/icons/date-icon';
import { getEventById } from './DUMMY_DATA';

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const { title, description, location, date, image } = getEventById(eventId);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <div className="bg-white md:flex shadow-lg rounded-lg overflow-hidden">
      <div className="md:shrink-0">
        <img src={image} alt="image" className="h-48 w-full object-cover md:h-full md:w-60" />
      </div>

      <div className="p-8 flex flex-col justify-between">
        <div>
          <h2 className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{title}</h2>

          <div className="text-lg text-indigo-900">{description}</div>

          <div className="mt-4 text-indigo-400 font-semibold flex gap-2">
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className="mt-2 text-slate-500 whitespace-pre flex gap-2">
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
    </div>
  );
}
