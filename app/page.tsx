import CharacterCard from '@/components/CharacterCard';
import MatchTitle from '@/components/MatchTitle';
import { db } from '@/lib/db';

const getMatches = async () => {
  const matches = await db.match.findMany({});
  return { matches };
};

export default async function Matches() {
  const { matches } = await getMatches();

  return (
    <div className='flex flex-cols-2 w-3/4 gap-8 justify-between px-7'>
      <div>
        <CharacterCard />
        <CharacterCard />
      </div>
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
