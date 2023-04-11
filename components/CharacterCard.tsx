import Image from 'next/image';

const CharacterCard = () => {
  return (
    <div className='bg-dk-gray w-[150px] h-[250px] mb-4 border-4 border-lt-gray rounded'>
      <Image src='/assets/portraits/Fox_Palette_(SSBM).png' alt='Fox' width={150} height={150} />
    </div>
  );
};

export default CharacterCard;
