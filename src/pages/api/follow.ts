import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }

  try {
    const { userId } = req.body;

    const { currentUser } = await serverAuth(req, res);

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid id");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("Invalid id");
    }

    let updateFollowingIds = [...(user.followingIds || [])];

    if (req.method === "POST") {
      updateFollowingIds.push(userId);
    }

    if (req.method === "DELETE") {
      updateFollowingIds = updateFollowingIds.filter(
        (followingId) => followingId !== userId
      );
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updateFollowingIds,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
