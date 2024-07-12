import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const type = formData.get("type") ?? "";
  const id = formData.get("id")?.toString() ?? "";

  if (type === "comments") {
    const comments = await prisma.comment.update({
      where: {
        id,
      },
      data: {
        like: { increment: 1 },
      },
    });

    // const comments = await prisma.comment.findFirst({
    //   where: { id },
    // });

    // const dislikeSum = comments?.dislike ?? 0;

    // if (dislikeSum < 1) {
    //   await prisma.comment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       like: { increment: 1 },
    //     },
    //   });
    // } else {
    //   await prisma.comment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       like: { increment: 1 },
    //       dislike: { decrement: 1 },
    //     },
    //   });
    // }

    return NextResponse.json({ message: "Sukses" }, { status: 200 });
  } else {
    const subcomments = await prisma.subComment.update({
      where: {
        id,
      },
      data: {
        like: { increment: 1 },
      },
    });

    // const subComment = await prisma.subComment.findFirst({
    //   where: { id },
    // });

    // const dislikeSum = subComment?.dislike ?? 0;

    // if (dislikeSum < 1) {
    //   await prisma.subComment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       like: { increment: 1 },
    //     },
    //   });
    // } else {
    //   await prisma.subComment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       like: { increment: 1 },
    //       dislike: { decrement: 1 },
    //     },
    //   });
    // }

    return NextResponse.json({ message: "Sukses" }, { status: 200 });
  }
}
