const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new event
async function createEvent(eventData) {

  try {
    const { name, eventDate, starttime, endtime, summary, location } = eventData;
    const venue = await prisma.venue.findFirst({
      where: {
        name: location,
      },
    });

    if (!venue) {
      throw new Error(`Venue with name ${location} not found.`);
    }

    const newEvent = await prisma.event.create({
      data: {
        name,
        eventDate: new Date(eventDate),
        created: new Date(),
        starttime,
        endtime,
        summary,
        venue_id: venue.id, // Assign the venue_id
      },
    });
    return newEvent;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Retrieve all events
async function getAllEvents() {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createEvent,
  getAllEvents,
};
