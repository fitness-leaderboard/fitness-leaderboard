import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  const { email } = await request.json();
  // Check if email is provided
  if (!email) {
    return new NextResponse(JSON.stringify({ error: `Account does not exist with ${email}` }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Find the user by email
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  // If user is not found, return an error
  if (!user) {
    return new NextResponse(JSON.stringify({ error: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const deleteBikingActivity = prisma.bikingActivity.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteHikingActivity = prisma.hikingActivity.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteRunningActivity = prisma.runningActivity.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteWalkingActivity = prisma.walkingActivity.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteSwimmingActivity = prisma.swimmingActivity.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteRowingActivity = prisma.rowingActivity.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteProfile = prisma.profile.delete({
      where: {
        id: user.id,
      },
    });

    const deleteRanking = prisma.rank.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteProfileBadge = prisma.profileBadge.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteProfileRoom = prisma.profileRoom.deleteMany({
      where: {
        profileId: user.id,
      },
    });

    const deleteUser = prisma.user.delete({
      where: {
        id: user.id,
      },
    });

    const transactionOperations = [];

    if (await prisma.bikingActivity.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteBikingActivity);
    }

    if (await prisma.hikingActivity.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteHikingActivity);
    }

    if (await prisma.runningActivity.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteRunningActivity);
    }

    if (await prisma.walkingActivity.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteWalkingActivity);
    }

    if (await prisma.swimmingActivity.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteSwimmingActivity);
    }

    if (await prisma.rowingActivity.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteRowingActivity);
    }

    if (await prisma.rank.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteRanking);
    }

    if (await prisma.profileBadge.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteProfileBadge);
    }

    if (await prisma.profileRoom.findMany({ where: { profileId: user.id } })) {
      transactionOperations.push(deleteProfileRoom);
    }

    if (await prisma.profile.findFirst({ where: { id: user.id } })) {
      transactionOperations.push(deleteProfile);
    }

    if (await prisma.user.findFirst({ where: { id: user.id } })) {
      transactionOperations.push(deleteUser);
    }

    if (transactionOperations.length === 0) {
      return new NextResponse(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await prisma.$transaction(transactionOperations);

    // Return success message
    return new NextResponse(JSON.stringify({ message: `User deleted successfully` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to delete user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await prisma.$disconnect();
  }
}
