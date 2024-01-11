import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma';
import { User, UserType } from "@/components/types/user";
import { Chat } from "@/components/types/chat";

export async function GET(request: NextRequest, context: { params: { user_id: number } }) {
    const userId: number = +context.params.user_id
    const chats: Chat[] = (await prisma.chat.findMany({
        where: {
            OR: [
                {
                    patientId: userId
                },
                {
                    providerId: userId
                }
            ]
        }
    })).map((chat) => ({
        id: chat.id,
        patientId: chat.patientId,
        providerId: chat.providerId,
        createdAt: chat.createdAt
    }));
    return NextResponse.json(chats)
}