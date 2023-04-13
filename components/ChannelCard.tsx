import { Channel } from '@prisma/client';
import Card from './Card';

type ChannelCardProps = { channel: Channel };

const EventCard = async ({ channel }: ChannelCardProps) => {
  const { name, thumbnail, region, twitchURL, youtubeURL, twitterURL } = channel;

  return (
    /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
    /* @ts-expect-error Server Component */
    <Card header={name} subHeader={region} image={thumbnail} flag='flag' />
  );
};

export default EventCard;
