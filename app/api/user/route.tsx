import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';
import { User, UserType } from "@/components/types/user";

export async function GET() {
    const users: User[] = (await prisma.user.findMany({})).map((user) => ({
        id: user.id,
        name: user.name,
        UserType: user.isProvider ? UserType.Provider : UserType.Patient,
        createdAt: user.createAt
    }));

    return NextResponse.json(users)
}
