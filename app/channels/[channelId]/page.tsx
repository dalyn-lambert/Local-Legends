import ChannelCard from '@/components/ChannelCard';
import { getChannelById, getEventsForChannel } from '@/lib/db';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function Channel({ params }: { params: { channelId: number } }) {
  const { channelId } = params;
  const channel = await getChannelById(+channelId);
  const { events } = await getEventsForChannel(+channelId);
  return (
    <div className='flex flex-cols-2 w-3/4 gap-8 justify-between px-7'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <ChannelCard channel={channel} />
      {events.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <div>{event.name}</div>
          <div>{format(new Date(event?.eventDate), 'MM/dd/yyyy')}</div>
        </Link>
      ))}
    </div>
  );
}
