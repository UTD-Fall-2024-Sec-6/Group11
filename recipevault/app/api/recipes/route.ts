import Recipe from "@/app/models/Recipe";
import dbConnect from "@/app/mongodb/connectDb";
import { NextResponse, NextRequest } from "next/server";

export async function GET (req: NextRequest) {
    await dbConnect();

    try {
        const recipes = await Recipe.find({})
        return NextResponse.json({
            recipes
        }, {status: 200})
    } catch (e) {
        return NextResponse.json({
            error: e
        }, {status: 400})
    }
}