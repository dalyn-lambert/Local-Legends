import EventCard from '@/components/EventCard';
import { db, getAllEvents } from '@/lib/db';
import Link from 'next/link';

export default async function Events() {
  const { events } = await getAllEvents();
  return (
    <div className='flex flex-row flex-wrap w-3/4 gap-4 justify-between px-7'>
      {events.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
          {/* @ts-expect-error Server Component */}
          <EventCard event={event} />
        </Link>
      ))}
    </div>
  );
}
