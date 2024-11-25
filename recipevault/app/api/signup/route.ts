import User from "@/app/models/User";
import dbConnect from "@/app/mongodb/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect();

    try {
        const body = await req.json(); // Use req.json() to parse body
        const {Role, userName, Email, Password} = body;
        const user = await User.create({Role, userName, Email, Password})
        return NextResponse.json({
            success: true,
            message: `User (${user.Email} has been successfully created.)`
        }, { status: 200 })
    } catch (e) {
        return NextResponse.json({
            error: e,
        }, { status: 400 })
    }
}