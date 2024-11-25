import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/mongodb/connectDb";

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