import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const nama = formData.get("nama") ?? "";
  const komentar = formData.get("komentar") ?? "";
  const replyTo = formData.get("replyTo") ?? "";
  const commentId = formData.get("commentId") ?? "";

  const name = nama.toString();
  const content = komentar.toString();

  await prisma.subComment.create({
    data: {
      name,
      content,
      like: 0,
      dislike: 0,
      replyTo: replyTo.toString(),
      commentId: commentId.toString(),
    },
  });

  return NextResponse.json({ message: "Sukses" }, { status: 200 });
}
