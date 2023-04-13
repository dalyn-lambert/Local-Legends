import { getEventById } from '@/lib/db';
import { Match } from '@prisma/client';
import Image from 'next/image';

type MatchTitleProps = { match: Match };

const MatchTitle = async ({ match }: MatchTitleProps) => {
  const size = 24;
  const { player1, playerOneCharacter, playerTwo, playerTwoCharacter, eventId, bracketBlock, videoUrl } = match;
  const event = await getEventById(eventId);

  return (
    <a
      href={videoUrl}
      target='_blank'
      className='border-b-2 border-b-dk-gray grid grid-cols-4 gap-8 p-2 text-white text-sm'
    >
      <div className='flex flex-row gap-3 col-span-2'>
        {player1}
        <Image
          src={`/assets/icons/${playerOneCharacter}.png`}
          alt={`${playerOneCharacter}`}
          width={size}
          height={size}
        />{' '}
        <span>vs</span> {playerTwo}
        <Image
          src={`/assets/icons/${playerTwoCharacter}.png`}
          alt={`${playerTwoCharacter}`}
          width={size}
          height={size}
        />
      </div>
      <div className='col-start-3'>{event && <span>{event.name}</span>}</div>
      <div>{bracketBlock}</div>
    </a>
  );
};

export default MatchTitle;
