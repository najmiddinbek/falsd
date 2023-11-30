import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, time, date } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description, time, date });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}


export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const existingTopic = await Topic.findById(id);
  if (!existingTopic) { return NextResponse.json({ message: "Topic not found" }, { status: 404 }); }
  existingTopic.isChecked = !existingTopic.isChecked; const updatedTopic = await existingTopic.save(); return NextResponse.json({ message: "Topic updated", updatedTopic }, { status: 200 });
}
