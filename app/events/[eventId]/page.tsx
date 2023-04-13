import EventCard from '@/components/EventCard';
import MatchTitle from '@/components/MatchTitle';
import { getEventById, getMatchesForEvent } from '@/lib/db';

export default async function Event({ params }: { params: { eventId: number } }) {
  const { eventId } = params;
  const event = await getEventById(+eventId);
  const { matches } = await getMatchesForEvent(+eventId);
  return (
    <div className='flex flex-cols-2 w-3/4 gap-8 justify-between px-7'>
      {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
      {/* @ts-expect-error Server Component */}
      <EventCard event={event} />
      <div className='grow'>
        {matches.map((match) => (
          /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
          /* @ts-expect-error Server Component */
          <MatchTitle key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
