import Card from '@/components/Card';
import { db } from '@/lib/db';

const getEvents = async () => {
  const events = await db.event.findMany({});
  return { events };
};

export default async function Events() {
  const { events } = await getEvents();
  return (
    <div className='flex flex-row flex-wrap w-3/4 gap-4 justify-between px-7'>
      {events.map((event) => (
        /* https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */
        /* @ts-expect-error Server Component */
        <Card key={event.id} event={event} />
      ))}
    </div>
  );
}
