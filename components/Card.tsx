import Image from 'next/image';

type CardProps = { flag: string; image: string; header: string; subHeader: string };

const Card = async ({ flag, image, header, subHeader }: CardProps) => {
  return (
    <div className='hover:drop-shadow-2xl shadow-dk-purple bg-dk-gray w-[175px] h-[275px] mb-4 border-4 border-md-gray rounded flex flex-col gap-12 items-center'>
      <div className='absolute w-[75px] h-[25px] bg-yellow drop-shadow-lg rounded shadow-dk-yellow text-xs text-black text-center flex flex-col justify-center -translate-y-2 -translate-x-14'>
        {flag}
      </div>
      <Image
        src={image}
        width={100}
        height={100}
        alt={`Logo for
      ${header}`}
        className='pt-8'
      />
      <div className='flex flex-col items-center'>
        <div className='bg-dk-blue w-[150px] h-[75px] border-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-end pb-1'>
          {subHeader}
        </div>
        <div className='bg-black w-[125px] h-[50px] border-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-center -translate-y-[90px]'>
          {header}
        </div>
      </div>
    </div>
  );
};

export default Card;
