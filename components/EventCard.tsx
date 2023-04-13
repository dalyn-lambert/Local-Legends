import { getChannelById } from '@/lib/db';
import { Event } from '@prisma/client';
import { format } from 'date-fns';
import Card from './Card';

type EventCardProps = { event: Event };

const EventCard = async ({ event }: EventCardProps) => {
  const { name, eventDate, channelId } = event;
  const formattedDate = format(new Date(eventDate), 'MM/dd/yyyy');

  const channel = await getChannelById(channelId);

  return (
    /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
    /* @ts-expect-error Server Component */
    <Card header={name} subHeader={channel?.name} image={channel?.thumbnail} flag={formattedDate} />
  );
};

export default EventCard;
