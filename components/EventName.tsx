import { getEventById } from '@/lib/db';

type EventNameProps = { event: number };

const EventName = async (eventId: EventNameProps) => {
  const event = await getEventById(eventId.event);
  if (event) {
    return <div className='col-start-3'>{event.name}</div>;
  }
};

export default EventName;
