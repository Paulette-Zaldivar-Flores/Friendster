const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new attendee
async function createAttendee(attendeeData) {

  try {
    const {event_id, user_id} = attendeeData;
    const exist_attendee = await prisma.attendee.findFirst({
      where: {
        user_id: user_id,
        event_id: event_id
      },
    });

    if (exist_attendee) {
      throw new Error('Already attending this event.');
    }

    const newAttendee = await prisma.attendee.create({
      data: {
        created: new Date(),
        event_id,
        user_id
      },
    });
    return newAttendee;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Retrieve all attendees for an event
async function getAllAttendees(evt_id) {
  try {
    const attendees = await prisma.attendee.findMany({
      where: { event_id: evt_id },
    });
    return attendees;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createAttendee,
  getAllAttendees,
};
