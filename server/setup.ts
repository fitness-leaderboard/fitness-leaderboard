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

export const userData = [
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

export const profileData = [
  {
    id: 1,
    name: 'Liam',
    birthday: new Date('1999-01-01'),
    bio: 'I am a cool person',
  },
  {
    id: 2,
    name: 'Katie',
    birthday: new Date('1999-01-01'),
    bio: 'I am a bad person',
  },
  {
    id: 3,
    name: 'John',
    birthday: new Date('1999-01-01'),
    bio: 'I drink koolaid',
  },
  {
    id: 4,
    name: 'Ella',
    birthday: new Date('1999-01-01'),
    bio: 'Pie',
  },
];

export const badgeData = [
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

export const profileBadgeData = [
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

export const roomData = [
  {
    name: 'room1',
  },
  {
    name: 'room2',
  },
  {
    name: 'room3',
  },
  {
    name: 'room4',
  },
  {
    name: 'room5',
  },
];

export const profileRoomData = [
  {
    profileId: 1,
    roomId: 1,
  },
  {
    profileId: 1,
    roomId: 2,
  },
  {
    profileId: 1,
    roomId: 3,
  },
  {
    profileId: 2,
    roomId: 1,
  },

  {
    profileId: 2,
    roomId: 2,
  },
  {
    profileId: 3,
    roomId: 2,
  },
  {
    profileId: 3,
    roomId: 4,
  },
  {
    profileId: 4,
    roomId: 1,
  },
];

export const activityTypeData = [
  {
    id: 1,
    name: 'Running',
  },
  {
    id: 2,
    name: 'Biking',
  },
  {
    id: 3,
    name: 'Hiking',
  },
  {
    id: 4,
    name: 'Rowing',
  },
  {
    id: 5,
    name: 'Swimming',
  },
];

export const leaderboardData = [
  {
    name: 'leaderboard1',
    activityTypeId: 1,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
    roomId: 1,
  },
  {
    name: 'leaderboard2',
    activityTypeId: 2,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
    roomId: 1,
  },
  {
    name: 'leaderboard3',
    activityTypeId: 3,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
    roomId: 2,
  },
  {
    name: 'leaderboard4',
    activityTypeId: 4,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
    roomId: 3,
  },
  {
    name: 'leaderboard5',
    activityTypeId: 5,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-07'),
    roomId: 5,
  },
];

export const runningData = [
  {
    profileId: 1,
    distance: 1000,
    movingTime: 1440,
    elapsedTime: 1550,
    elevation: 70,
    avgSpeed: 1.1,
    score: 88,
  },
  {
    profileId: 2,
    distance: 989,
    movingTime: 1002,
    elapsedTime: 1440,
    elevation: 2,
    avgSpeed: 1.3,
    score: 77,
  },
  {
    profileId: 3,
    distance: 10,
    movingTime: 100,
    elapsedTime: 100,
    elevation: 100,
    avgSpeed: 10,
    score: 100,
  },
  {
    profileId: 4,
    distance: 800,
    movingTime: 2440,
    elapsedTime: 2567,
    elevation: 0,
    avgSpeed: 0.2,
    score: 89,
  },
];

export const swimmingData = [
  {
    profileId: 1,
    distance: 1500,
    movingTime: 1800,
    elapsedTime: 2000,
    avgSpeed: 0.83,
    score: 90,
  },
  {
    profileId: 2,
    distance: 1200,
    movingTime: 1500,
    elapsedTime: 1700,
    avgSpeed: 0.8,
    score: 85,
  },
  {
    profileId: 3,
    distance: 500,
    movingTime: 600,
    elapsedTime: 700,
    avgSpeed: 0.83,
    score: 92,
  },
  {
    profileId: 4,
    distance: 2000,
    movingTime: 2400,
    elapsedTime: 2600,
    avgSpeed: 0.83,
    score: 95,
  },
];

export const bikingData = [
  {
    profileId: 1,
    distance: 20000,
    movingTime: 3600,
    elapsedTime: 4000,
    elevation: 250,
    avgSpeed: 5.56,
    score: 87,
  },
  {
    profileId: 2,
    distance: 15000,
    movingTime: 2700,
    elapsedTime: 3200,
    elevation: 180,
    avgSpeed: 5.56,
    score: 82,
  },
  {
    profileId: 3,
    distance: 10000,
    movingTime: 1800,
    elapsedTime: 2000,
    elevation: 100,
    avgSpeed: 5.56,
    score: 90,
  },
  {
    profileId: 4,
    distance: 25000,
    movingTime: 4500,
    elapsedTime: 5000,
    elevation: 300,
    avgSpeed: 5.56,
    score: 88,
  },
];

export const walkingData = [
  {
    profileId: 1,
    distance: 5000,
    movingTime: 3600,
    elapsedTime: 4200,
    elevation: 50,
    avgSpeed: 1.39,
    score: 85,
  },
  {
    profileId: 2,
    distance: 7000,
    movingTime: 5400,
    elapsedTime: 6000,
    elevation: 80,
    avgSpeed: 1.3,
    score: 88,
  },
  {
    profileId: 3,
    distance: 3000,
    movingTime: 1800,
    elapsedTime: 2000,
    elevation: 30,
    avgSpeed: 1.67,
    score: 92,
  },
  {
    profileId: 4,
    distance: 8000,
    movingTime: 7200,
    elapsedTime: 8000,
    elevation: 100,
    avgSpeed: 1.11,
    score: 86,
  },
];

export const rowingData = [
  {
    profileId: 1,
    distance: 5000,
    movingTime: 3000,
    elapsedTime: 3200,
    avgSpeed: 1.67,
    score: 88,
  },
  {
    profileId: 2,
    distance: 4000,
    movingTime: 2400,
    elapsedTime: 2600,
    avgSpeed: 1.67,
    score: 85,
  },
  {
    profileId: 3,
    distance: 3000,
    movingTime: 1800,
    elapsedTime: 2000,
    avgSpeed: 1.67,
    score: 90,
  },
  {
    profileId: 4,
    distance: 6000,
    movingTime: 3600,
    elapsedTime: 3800,
    avgSpeed: 1.67,
    score: 92,
  },
];

export const rankData = [
  {
    profileId: 1,
    leaderboardId: 1,
    rank: 1,
    date: new Date('2021-01-01'),
  },
  {
    profileId: 2,
    leaderboardId: 1,
    rank: 2,
    date: new Date('2021-01-01'),
  },
  {
    profileId: 3,
    leaderboardId: 1,
    rank: 3,
    date: new Date('2021-01-01'),
  },
  {
    profileId: 4,
    leaderboardId: 1,
    rank: 4,
    date: new Date('2021-01-01'),
  },
  {
    profileId: 1,
    leaderboardId: 2,
    rank: 1,
    date: new Date('2021-01-02'),
  },
  {
    profileId: 2,
    leaderboardId: 2,
    rank: 2,
    date: new Date('2021-01-02'),
  },
  {
    profileId: 3,
    leaderboardId: 2,
    rank: 3,
    date: new Date('2021-01-02'),
  },
  {
    profileId: 4,
    leaderboardId: 2,
    rank: 4,
    date: new Date('2021-01-02'),
  },
  {
    profileId: 1,
    leaderboardId: 3,
    rank: 1,
    date: new Date('2021-01-03'),
  },
  {
    profileId: 2,
    leaderboardId: 3,
    rank: 2,
    date: new Date('2021-01-03'),
  },
  {
    profileId: 3,
    leaderboardId: 3,
    rank: 3,
    date: new Date('2021-01-03'),
  },
  {
    profileId: 4,
    leaderboardId: 3,
    rank: 4,
    date: new Date('2021-01-03'),
  },
  {
    profileId: 1,
    leaderboardId: 4,
    rank: 1,
    date: new Date('2021-01-04'),
  },
  {
    profileId: 2,
    leaderboardId: 4,
    rank: 2,
    date: new Date('2021-01-04'),
  },
  {
    profileId: 3,
    leaderboardId: 4,
    rank: 3,
    date: new Date('2021-01-04'),
  },
  {
    profileId: 4,
    leaderboardId: 4,
    rank: 4,
    date: new Date('2021-01-04'),
  },
];

export async function setupData() {
  // Use this to make dummy data. didn't make it for activities yet
  await prisma.user.createMany({
    data: userData,
  });
  await prisma.profile.createMany({
    data: profileData,
  });
  await prisma.badge.createMany({
    data: badgeData,
  });
  await prisma.profileBadge.createMany({
    data: profileBadgeData,
  });
  await prisma.room.createMany({
    data: roomData,
  });
  await prisma.profileRoom.createMany({
    data: profileRoomData,
  });
  await prisma.activityType.createMany({
    data: activityTypeData,
  });
  await prisma.leaderboard.createMany({
    data: leaderboardData,
  });
  await prisma.runningActivity.createMany({
    data: runningData,
  });
  await prisma.swimmingActivity.createMany({
    data: swimmingData,
  });
  await prisma.bikingActivity.createMany({
    data: bikingData,
  });
  await prisma.walkingActivity.createMany({
    data: walkingData,
  });
  await prisma.rowingActivity.createMany({
    data: rowingData,
  });
  await prisma.rank.createMany({
    data: rankData,
  });
}
