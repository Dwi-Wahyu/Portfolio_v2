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
        dislike: { increment: 1 },
      },
    });

    // const comments = await prisma.comment.findFirst({
    //   where: { id },
    // });

    // const likeSum = comments?.like ?? 0;

    // if (likeSum < 1) {
    //   await prisma.comment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       dislike: { increment: 1 },
    //     },
    //   });
    // } else {
    //   await prisma.comment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       dislike: { increment: 1 },
    //       like: { decrement: 1 },
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
        dislike: { increment: 1 },
      },
    });

    // const subComment = await prisma.subComment.findFirst({
    //   where: { id },
    // });

    // const likeSum = subComment?.like ?? 0;

    // if (likeSum < 1) {
    //   await prisma.subComment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       dislike: { increment: 1 },
    //     },
    //   });
    // } else {
    //   await prisma.subComment.update({
    //     where: {
    //       id,
    //     },
    //     data: {
    //       dislike: { increment: 1 },
    //       like: { decrement: 1 },
    //     },
    //   });
    // }

    return NextResponse.json({ message: "Sukses" }, { status: 200 });
  }
}
