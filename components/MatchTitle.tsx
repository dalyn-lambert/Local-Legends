import Image from 'next/image';

type MatchTitleProps = {
  player1: string;
  playerOneCharacter: string[];
  playerTwo: string;
  playerTwoCharacter: string[];
};

const MatchTitle = ({ player1, playerOneCharacter, playerTwo, playerTwoCharacter }: MatchTitleProps) => {
  const size = 24;
  return (
    <div className='flex flex-row gap-3 col-span-2'>
      {player1}
      <Image
        src={`/assets/icons/${playerOneCharacter}.png`}
        alt={`${playerOneCharacter}`}
        width={size}
        height={size}
      />{' '}
      <span>vs</span> {playerTwo}
      <Image src={`/assets/icons/${playerTwoCharacter}.png`} alt={`${playerTwoCharacter}`} width={size} height={size} />
    </div>
  );
};

export default MatchTitle;
