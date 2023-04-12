import ChannelCard from '@/components/ChannelCard';
import { db } from '@/lib/db';

const getChannels = async () => {
  const channels = await db.channel.findMany({});
  return { channels };
};

export default async function Channels() {
  const { channels } = await getChannels();
  return (
    <div className='flex flex-row flex-wrap w-3/4 gap-4 justify-between px-7'>
      {channels.map((channel) => (
        /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
        /* @ts-expect-error Server Component */
        <ChannelCard key={channel.id} channel={channel} />
      ))}
    </div>
  );
}
