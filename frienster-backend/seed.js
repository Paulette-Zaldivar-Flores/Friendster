const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

async function seedDatabase() {
  // Generate fake data using Faker
  const fakeUsers = [...Array(10)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    password_hash: faker.random.alphaNumeric(10), // This is just an example, please use proper password hashing
  }));

  const fakeEvents = [...Array(5)].map(() => ({
    name: faker.company.companyName(),
    summary: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    url: faker.internet.url(),
    starttime: faker.date.future(),
    endtime: faker.date.future(),
    // Add more fields as needed
  }));

  // Insert fake data into the database
  const createdUsers = await prisma.users.createMany({
    data: fakeUsers,
  });

  const createdEvents = await prisma.event.createMany({
    data: fakeEvents,
  });

  console.log("Fake data inserted:", {
    users: createdUsers,
    events: createdEvents,
  });
}

seedDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
