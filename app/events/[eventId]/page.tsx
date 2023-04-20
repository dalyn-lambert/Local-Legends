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
          <a
            key={match.id}
            href={match.videoUrl}
            target='_blank'
            className='hover:bg-dk-purple border-b-2 border-b-dk-purple flex flex-row gap-8 p-2 text-white text-sm justify-between'
          >
            <MatchTitle
              player1={match.playerOne}
              playerOneCharacter={match.playerOneCharacter}
              playerTwo={match.playerTwo}
              playerTwoCharacter={match.playerTwoCharacter}
            />
            <div>{match.bracketBlock}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
