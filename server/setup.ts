import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Use this to make dummy data. didn't make it for activities yet
  // setupData();
  const allUsers = await prisma.user.findMany({
    include: {},
  });
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const userData = [
  {
    email: 'l@northeastern.edu',
    password: 'password',
  },
  {
    email: 'k@northeastern.edu',
    password: 'password',
  },
  {
    email: 'j@northeastern.edu',
    password: 'password',
  },
  {
    email: 'e@northeastern.edu',
    password: 'password',
  },
];

const activityTypeData = [
  {
    name: 'Running',
  },
  {
    name: 'Biking',
  },
  {
    name: 'Hiking',
  },
  {
    name: 'Rowing',
  },
  {
    name: 'Swimming',
  },
];

const profileData = [
  {
    userId: 1,
    name: 'Liam',
    birthday: new Date('1999-01-01'),
    // bio: 'I am a cool person',
  },
  {
    userId: 2,
    name: 'Katie',
    birthday: new Date('1999-01-01'),
  },
  {
    userId: 3,
    name: 'John',
    birthday: new Date('1999-01-01'),
  },
  {
    userId: 4,
    name: 'Ella',
    birthday: new Date('1999-01-01'),
  },
];

const badgeData = [
  {
    name: 'Hiking',
    description: 'You have completed 10 hikes',
    iconPath: 'hiking.png',
    // activityTypeId: 1, - This could be useful
  },
  {
    name: 'Biking',
    description: 'You have completed 10 bike rides',
    iconPath: 'biking.png',
  },
  {
    name: 'Running',
    description: 'You have completed 10 runs',
    iconPath: 'running.png',
  },
  {
    name: 'Rowing',
    description: 'You have completed 10 rows',
    iconPath: 'rowing.png',
  },
  {
    name: 'Swimming',
    description: 'You have completed 10 swims',
    iconPath: 'swimming.png',
  },
];

const profileBadgeData = [
  {
    profileId: 1,
    badgeId: 1,
  },
  {
    profileId: 2,
    badgeId: 2,
  },
  {
    profileId: 3,
    badgeId: 3,
  },
  {
    profileId: 4,
    badgeId: 4,
  },
  {
    profileId: 1,
    badgeId: 2,
  },
  {
    profileId: 2,
    badgeId: 3,
  },
  {
    profileId: 3,
    badgeId: 4,
  },
  {
    profileId: 4,
    badgeId: 1,
  },
];

const leaderboardData = [
  {
    name: 'leaderboard1',
    activityTypeId: 1,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
  },
  {
    name: 'leaderboard2',
    activityTypeId: 2,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
  },
  {
    name: 'leaderboard3',
    activityTypeId: 3,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
  },
  {
    name: 'leaderboard4',
    activityTypeId: 4,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
  },
  {
    name: 'leaderboard5',
    activityTypeId: 5,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
  },
];

const profileLeaderboardData = [
  {
    profileId: 1,
    leaderboardId: 1,
  },
  {
    profileId: 1,
    leaderboardId: 2,
  },
  {
    profileId: 1,
    leaderboardId: 3,
  },
  {
    profileId: 2,
    leaderboardId: 1,
  },

  {
    profileId: 2,
    leaderboardId: 2,
  },
  {
    profileId: 3,
    leaderboardId: 2,
  },
  {
    profileId: 3,
    leaderboardId: 4,
  },
  {
    profileId: 4,
    leaderboardId: 1,
  },
];

/*
  id             Int          @id @default(autoincrement())
  activity       ActivityType @relation(fields: [activityTypeId], references: [id])
  activityTypeId Int
  leaderboard    Leaderboard  @relation(fields: [leaderboardId], references: [id])
  leaderboardId  Int
  Profile        Profile?     @relation(fields: [profileId], references: [id])
  profileId      Int?
  createdAt      DateTime     @default(now())
  updatedAt      DateTime     @updatedAt
  distance       Decimal
  movingTime     Int
  elapsedTime    Int
  elevation      Int
  avgSpeed       Decimal
  score          Decimal
  */

const activityData = [
  {
    activityTypeId: 1,
    leaderboardId: 1,
    profileId: 1,
    distance: 1000,
    movingTime: 1440,
    elapsedTime: 1550,
    elevation: 70,
    avgSpeed: 1.1,
    score: 88,
  },
  {
    activityTypeId: 2,
    leaderboardId: 2,
    profileId: 2,
    distance: 989,
    movingTime: 1002,
    elapsedTime: 1440,
    elevation: 2,
    avgSpeed: 1.3,
    score: 77,
  },
  {
    activityTypeId: 3,
    leaderboardId: 3,
    profileId: 3,
    distance: 10,
    movingTime: 100,
    elapsedTime: 100,
    elevation: 100,
    avgSpeed: 10,
    score: 100,
  },
  {
    activityTypeId: 4,
    leaderboardId: 4,
    profileId: 4,
    distance: 800,
    movingTime: 2440,
    elapsedTime: 2567,
    elevation: 0,
    avgSpeed: 0.2,
    score: 89,
  },
];

async function setupData() {
  // Use this to make dummy data. didn't make it for activities yet
  await prisma.user.createMany({
    data: userData,
  });

  await prisma.profile.createMany({
    data: profileData,
  });

  await prisma.activityType.createMany({
    data: activityTypeData,
  });

  await prisma.badge.createMany({
    data: badgeData,
  });

  await prisma.profileBadge.createMany({
    data: profileBadgeData,
  });

  await prisma.leaderboard.createMany({
    data: leaderboardData,
  });

  await prisma.profileLeaderboard.createMany({
    data: profileLeaderboardData,
  });

  await prisma.activity.createMany({
    data: activityData,
  });
}
