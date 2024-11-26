import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/mongodb/connectDb";
import Recipe from "@/app/models/Recipe";

export async function POST (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
        // Aryaman's Portion
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function GET (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
        // Diego's Portion
        // Extract `id` from query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Recipe ID is required" },
                { status: 400 }
            );
        }

        // Fetch recipe by ID
        const recipe = await Recipe.findOne({ id: Number(id) });

        if (!recipe) {
            return NextResponse.json(
                { success: false, error: "Recipe not found" },
                { status: 404 }
            );
        }

        // Return the recipe as a JSON response
        return NextResponse.json(
            { success: true, recipe },
            { status: 200 }
        );
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function UPDATE (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
        // Sanjana's Portion
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function DELETE (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
        // Nicholas's Portion
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}