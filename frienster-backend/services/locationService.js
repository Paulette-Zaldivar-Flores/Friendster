const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllLocations = async () => {
  try {
    // Query all rows from the venue table
    const locations = await prisma.venue.findMany();
    return locations;
  } catch (error) {
    throw error;
  }
};
exports.getAllLocations = getAllLocations;