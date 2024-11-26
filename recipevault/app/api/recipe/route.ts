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
        
        const body = await req.json();
        const { id, updateData } = body;

        if (!id || !updateData) {
            return NextResponse.json(
                { error: "Recipe ID and update data are required." },
                { status: 400 }
            );
        }

        const result = await Recipe.findOneAndUpdate(
            { id: id }, // Match the recipe by ID
            { $set: updateData }, // Apply updates
            { returnDocument: 'after' } // Return the updated document
        );

        if (!result.value) {
            return NextResponse.json(
                { error: "Recipe not found or no changes made." },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Recipe updated successfully", recipe: result.value }, { status: 200 });


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