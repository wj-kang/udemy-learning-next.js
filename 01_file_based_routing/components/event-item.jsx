import Link from 'next/link';
import Image from 'next/image';
import AddressIcon from './icons/address-icon';
import DateIcon from './icons/date-icon';

export default function EventItem(props) {
  const { id, title, description, location, date, image, isFeatured } = props;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const eventDetailLink = `/events/${id}`;

  return (
    <li className="bg-white md:flex shadow-lg rounded-lg overflow-hidden">
      <div className="md:shrink-0">
        <img src={image} alt="image" className="h-48 w-full object-cover md:h-full md:w-60" />
      </div>

      <div className="p-8 flex flex-col justify-between">
        <div>
          <h2 className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{title}</h2>
          <div className="mt-4 text-indigo-400 font-semibold flex gap-2">
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className="mt-2 text-slate-500 whitespace-pre flex gap-2">
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className="mt-8 flex w-full justify-end">
          <Link href={eventDetailLink}>
            <button className="text-white hover:text-indigo-100 font-bold bg-violet-500 px-4 py-2 rounded-lg">
              Explore Event
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}
