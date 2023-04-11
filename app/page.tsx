import MatchTitle from '@/components/MatchTitle';
import { db } from '@/lib/db';
import { Match } from '@prisma/client';

export type MatchData = Match;

const getMatches = async () => {
  const matches = await db.match.findMany({});
  return { matches };
};

export default async function Matches() {
  const { matches } = await getMatches();

  return (
    <div>
      {matches.map((match) => (
        /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
        /* @ts-expect-error Server Component */
        <MatchTitle key={match.id} match={match} />
      ))}
    </div>
  );
}
