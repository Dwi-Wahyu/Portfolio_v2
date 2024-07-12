import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const limit = request.nextUrl.searchParams.get("limit") as string;

  const take = parseInt(limit);

  const commentSum = await prisma.comment.count();

  const comments = await prisma.comment.findMany({
    include: { subcomment: true },
    take,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ comments, commentSum }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const nama = formData.get("nama") ?? "";
  const komentar = formData.get("komentar") ?? "";

  const name = nama.toString();
  const content = komentar.toString();

  await prisma.comment.create({
    data: {
      name,
      content,
      like: 0,
      dislike: 0,
    },
  });

  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
