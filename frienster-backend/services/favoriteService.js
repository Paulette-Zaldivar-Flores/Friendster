const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new favorite
async function createFavorite(favoriteData) {

  try {
    const {event_id, user_id} = favoriteData
    const exist_events = await prisma.favorite.findFirst({
      where: {
        user_id: user_id,
        event_id: event_id
      },
    });

    if (exist_events) {
      throw new Error(`Event already saved.`);
    }

    const newFavorite = await prisma.favorite.create({
      data: {
        created: new Date(),
        liked_status: true,
        number_shared: 0,
        event_id,
        user_id
      },
    });
    return newFavorite;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Retrieve all favorites for a user
async function getAllFavorites(uid) {
  try {
    const favorites = await prisma.favorite.findMany({
      where: { user_id: uid },
    });
    return favorites;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createFavorite,
  getAllFavorites,
};
