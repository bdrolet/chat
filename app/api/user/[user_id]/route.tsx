import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma';
import { User, UserType } from "@/components/types/user";

export async function GET(request: NextRequest, context: { params: { user_id: number } }) {
    const userId: number = +context.params.user_id
    const result = await prisma.user.findUniqueOrThrow({
        where: {
            id: userId
        }
    });
    const user: User = {
        id: result.id,
        name: result.name,
        UserType: result.isProvider ? UserType.Provider : UserType.Patient,
        createdAt: result.createAt
    };

    return NextResponse.json(user)
}