import User from "@/app/models/User";
import dbConnect from "@/app/mongodb/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();

    try {
        const {username, password} = await req.json(); // Use req.json() to parse body

        const user = await User.findOne({ username: username }).select( "email username password _id",);

        if (!user) {
            return NextResponse.json({
                error: "User not found",
            }, { status: 400 })
        }
    
        if (user.password !== password) {
            return NextResponse.json({
                error: "Incorrect password.",
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            message: `User (${user.username}) signed in.)`
        }, { status: 200 })
    } catch (e) {
        return NextResponse.json({
            error: e,
        }, { status: 400 })
    }
}