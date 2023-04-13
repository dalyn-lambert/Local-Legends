import EventCard from '@/components/EventCard';
import { getEventById } from '@/lib/db';

export default async function Event({ params }: { params: { eventId: number } }) {
  const { eventId } = params;
  const event = await getEventById(+eventId);
  console.log({ event });
  return (
    /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
    /* @ts-expect-error Server Component */
    <EventCard event={event} />
  );
}
