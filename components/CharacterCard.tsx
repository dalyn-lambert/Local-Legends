import Image from 'next/image';

type CharacterCardProps = { flag: string; character: string };

const CharacterCard = ({ flag, character }: CharacterCardProps) => {
  return (
    <div className='hover:drop-shadow-2xl shadow-dk-purple bg-dk-gray w-[175px] h-[275px] mb-4 border-4 border-md-gray rounded flex flex-col gap-2 items-center'>
      <div className='absolute w-[75px] h-[25px] bg-yellow drop-shadow-lg rounded shadow-dk-yellow text-xs text-black text-center flex flex-col justify-center -translate-y-2 -translate-x-14'>
        {flag}
      </div>
      <Image
        src={`/assets/portraits/${character}.png`}
        width={100}
        height={100}
        alt={`Portrait of
      ${character}`}
        className='pt-8 translate-x-[34px]'
      />
      <div className='flex flex-col items-center'>
        <div className='bg-dk-blue w-[150px] h-[75px] border-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-end pb-1'>
          {character}
        </div>
        <div className='bg-black w-[125px] h-[50px] border-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-center -translate-y-[90px]'>
          Drop Down Here
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
