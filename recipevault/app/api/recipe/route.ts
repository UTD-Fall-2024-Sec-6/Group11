import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/mongodb/connectDb";
import Recipe from "@/app/models/Recipe";

export async function POST (req: NextRequest, res: NextResponse ) {
    await dbConnect();
    try {
        // Aryaman's Portion
        const {recipe_name, ingredients, instructions, image} = await req.json();
        const recipe = await Recipe.create({recipe_name, ingredients, instructions, image});
        return NextResponse.json({
            success: true,
            message: `Recipe (${recipe.recipe_name}) has been successfully created.)`
        }, { status: 200 })
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function GET (req: NextRequest, res: NextResponse) {
    await dbConnect();
    try {
        // Diego's Portion
        // Extract id from query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const search = searchParams.get("search");

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Recipe ID is required" },
                { status: 400 }
            );
        }

        const query: any = {};
        if (search) {
            query.recipe_name = { $regex: search, $options: "i" };
        }

        // Fetch recipe by ID
        
        const recipe = await Recipe.findById(id);
        return NextResponse.json({
            recipe: recipe
        }, {status: 200})
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function PUT (req: NextRequest, res: NextResponse ) {
    await dbConnect();
    try {
        // Sanjana's Portion
        const body = await req.json();
        const { id, recipe_name, ingredients, instructions } = body;

        if (!id) {
            return NextResponse.json(
                { error: "Recipe ID is required." },
                { status: 400 }
            );
        }

        const updateFields: any = {};
        if (recipe_name !== undefined) updateFields.recipe_name = recipe_name;
        if (ingredients !== undefined) updateFields.ingredients = ingredients;
        if (instructions !== undefined) updateFields.instructions = instructions;

        if (Object.keys(updateFields).length === 0) {
            return NextResponse.json(
                { error: "At least one field to update must be provided." },
                { status: 400 }
            );
        }

        const result = await Recipe.findOneAndUpdate(
            { id: id }, // Match the recipe by ID
            { $set: updateFields }, // Apply updates
            { new: true } // Return the updated document
        );

        if (!result) {
            return NextResponse.json(
                { error: "Recipe not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Recipe updated successfully", recipe: result },
            { status: 200 }
        );
        
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

export async function DELETE (req: NextRequest, res: NextResponse ) {
    await dbConnect();
    try {
        // Nicholas's Portion
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Recipe ID is required" },
                { status: 400 }
            );
        }

        const recipe = await Recipe.findByIdAndDelete(id)
        return NextResponse.json({
            success: true,
            message: `Recipe (${recipe._id}) has been deleted.`
        }, {status: 200})
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}