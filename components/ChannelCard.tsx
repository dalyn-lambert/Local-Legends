import { Channel } from '@prisma/client';
import Image from 'next/image';

type ChannelCardProps = { channel: Channel };

const EventCard = async ({ channel }: ChannelCardProps) => {
  const { name, thumbnail, region, twitchURL, youtubeURL, twitterURL } = channel;

  return (
    <div className='bg-dk-gray w-[150px] h-[250px] mb-4 border-4 border-lt-gray rounded'>
      {name} in {region}
      {thumbnail && (
        <Image
          src={thumbnail}
          width={50}
          height={50}
          alt={`Logo for
      ${name}`}
        />
      )}
    </div>
  );
};

export default EventCard;
