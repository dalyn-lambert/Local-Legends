import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;

// Channel Database Calls

export const getAllChannels = async () => {
  const channels = await db.channel.findMany({});
  return { channels };
};

export const getChannelById = async (channelId: number) => {
  const channel = await db.channel.findUnique({
    where: { id: channelId },
  });
  if (channel) {
    return channel;
  }
};

// Match Database Calls

export const getAllMatches = async () => {
  const matches = await db.match.findMany({});
  return { matches };
};

// Event Database Calls

export const getAllEvents = async () => {
  const events = await db.event.findMany({});
  return { events };
};

export const getEventById = async (eventId: number) => {
  const event = await db.event.findUnique({
    where: {
      id: eventId,
    },
  });
  if (event) {
    return event;
  }
};
