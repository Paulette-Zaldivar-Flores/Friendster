const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new event
async function createEvent(eventData) {
  try {
    const newEvent = await prisma.event.create({
      data: eventData,
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
