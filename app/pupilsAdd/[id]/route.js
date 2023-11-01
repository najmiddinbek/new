import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/28-maktab";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newShaxs: shaxs, newMaktab: maktab, newSinf: sinf, newPupil: pupil } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { shaxs, maktab, sinf, pupil });
    return NextResponse.json({ message: "Maktab Yangilandi" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}
