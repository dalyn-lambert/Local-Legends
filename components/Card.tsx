import Image from 'next/image';

type CardProps = { flag: string; image: string; header: string; subHeader: string };

const Card = async ({ flag, image, header, subHeader }: CardProps) => {
  return (
    <div className='bg-dk-gray w-[150px] h-[250px] mb-4 border-4 border-lt-gray rounded'>
      header: {header}
      subHeader: {subHeader}
      flag: {flag}
      {image && (
        <Image
          src={image}
          width={50}
          height={50}
          alt={`Logo for
      ${header}`}
        />
      )}
    </div>
  );
};

export default Card;
