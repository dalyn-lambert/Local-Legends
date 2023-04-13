import CharacterCard from '@/components/CharacterCard';
import EventName from '@/components/EventName';
import MatchTitle from '@/components/MatchTitle';
import { getAllMatches } from '@/lib/db';

export default async function Matches() {
  const { matches } = await getAllMatches();

  return (
    <div className='flex flex-cols-2 w-3/4 gap-8 justify-between px-7'>
      <div>
        <CharacterCard />
        <CharacterCard />
      </div>
      <div className='grow'>
        {matches.map((match) => (
          <a
            key={match.id}
            href={match.videoUrl}
            target='_blank'
            className='hover:bg-dk-purple border-b-2 border-b-dk-purple grid grid-cols-4 gap-8 p-2 text-white text-sm'
          >
            <MatchTitle
              player1={match.player1}
              playerOneCharacter={match.playerOneCharacter}
              playerTwo={match.playerTwo}
              playerTwoCharacter={match.playerTwoCharacter}
            />
            {/* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
            {/* @ts-expect-error Server Component */}
            <EventName event={match.eventId} />
            <div>{match.bracketBlock}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
