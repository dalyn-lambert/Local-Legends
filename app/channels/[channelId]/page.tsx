import ChannelCard from '@/components/ChannelCard';
import { getChannelById } from '@/lib/db';

export default async function Channel({ params }: { params: { channelId: number } }) {
  const { channelId } = params;
  const channel = await getChannelById(+channelId);
  return (
    /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
    /* @ts-expect-error Server Component */
    <ChannelCard channel={channel} />
  );
}
