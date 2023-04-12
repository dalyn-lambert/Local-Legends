import { db } from '@/lib/db';
import { Event } from '@prisma/client';
import { format } from 'date-fns';
import Image from 'next/image';

type EventCardProps = { event: Event };

const getChannelForEvent = async (channelId: number) => {
  const channel = await db.channel.findUnique({
    where: { id: channelId },
  });
  if (channel) {
    return channel;
  }
};

const EventCard = async ({ event }: EventCardProps) => {
  const { name, eventDate, channelId } = event;
  const formattedDate = format(new Date(eventDate), 'MM/dd/yyyy');

  const channel = await getChannelForEvent(channelId);
  return (
    <div className='bg-dk-gray w-[150px] h-[250px] mb-4 border-4 border-lt-gray rounded'>
      {name} on {formattedDate} by {channel?.name}
      {channel?.thumbnail && (
        <Image
          src={channel?.thumbnail}
          width={50}
          height={50}
          alt={`Logo for
      ${channel?.name}`}
        />
      )}
    </div>
  );
};

export default EventCard;
