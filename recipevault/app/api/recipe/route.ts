import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/mongodb/connectDb";
import Recipe from "@/app/models/Recipe";

export async function POST (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
        // Parse JSON body from the request
        const body = await req.json();

        // Validate required fields
        const { id, recipe_name, ingredients, instructions } = body;

        if (!id || !recipe_name || !ingredients || !instructions) {
            return NextResponse.json(
                { success: false, error: "All fields (id, recipe_name, ingredients, instructions) are required" },
                { status: 400 }
            );
        }

        // Check if a recipe with the same ID already exists
        const existingRecipe = await Recipe.findOne({ id });
        if (existingRecipe) {
            return NextResponse.json(
                { success: false, error: "A recipe with this ID already exists" },
                { status: 409 }
            );
        }

        // Create a new recipe
        const newRecipe = new Recipe({
            id,
            recipe_name,
            ingredients,
            instructions,
        });

        // Save the recipe to the database
        await newRecipe.save();

        // Return success response
        return NextResponse.json(
            { success: true, recipe: newRecipe },
            { status: 201 }
        );
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function GET (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
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
        // Extract `id` from query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Recipe ID is required" },
                { status: 400 }
            );
        }

        // Parse JSON body from the request
        const body = await req.json();
        const { recipe_name, ingredients, instructions } = body;

        // Validate at least one field to update
        if (!recipe_name && !ingredients && !instructions) {
            return NextResponse.json(
                { success: false, error: "At least one field to update is required" },
                { status: 400 }
            );
        }

        // Find the recipe by ID and update its details
        const updatedRecipe = await Recipe.findOneAndUpdate(
            { id: Number(id) },
            { 
                ...(recipe_name && { recipe_name }),
                ...(ingredients && { ingredients }),
                ...(instructions && { instructions }),
            },
            { new: true } // Return the updated document
        );

        if (!updatedRecipe) {
            return NextResponse.json(
                { success: false, error: "Recipe not found" },
                { status: 404 }
            );
        }

        // Return success response with updated recipe
        return NextResponse.json(
            { success: true, recipe: updatedRecipe },
            { status: 200 }
        );
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}

export async function DELETE (res: NextResponse, req: NextRequest) {
    await dbConnect();
    try {
        // Enter the code here
        // Extract `id` from query parameters
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { success: false, error: "Recipe ID is required" },
                { status: 400 }
            );
        }

        // Find and delete the recipe
        const deletedRecipe = await Recipe.findOneAndDelete({ id: Number(id) });

        if (!deletedRecipe) {
            return NextResponse.json(
                { success: false, error: "Recipe not found" },
                { status: 404 }
            );
        }

        // Return success response
        return NextResponse.json(
            { success: true, message: "Recipe deleted successfully", recipe: deletedRecipe },
            { status: 200 }
        );
        
    } catch (error) {
        return NextResponse.json({
            error: error,
        }, { status: 400 })
    }
}