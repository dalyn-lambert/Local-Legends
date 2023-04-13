import { countEventsForChannel } from '@/lib/db';
import { Channel } from '@prisma/client';
import Card from './Card';

type ChannelCardProps = { channel: Channel };

const ChannelCard = async ({ channel }: ChannelCardProps) => {
  const { name, thumbnail, region, id } = channel;
  const eventCount = await countEventsForChannel(id);

  return (
    /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
    /* @ts-expect-error Server Component */
    <Card header={name} subHeader={`${eventCount} Event${eventCount > 1 ? 's' : ''}`} image={thumbnail} flag={region} />
  );
};

export default ChannelCard;
