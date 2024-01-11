import { NextResponse } from "next/server"
import { Message } from "@/components/types/message";
import { Chat } from "@/components/types/chat";
import prisma from '@/lib/prisma';
import { nanoid } from "nanoid";

// NextResponse Documentation: https://nextjs.org/docs/app/api-reference/functions/next-response
// Dynamic Routes Documentation: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Routes Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function GET(request: Request, context: { params: { chat_id: string } }) {
    const chatId: string = context.params.chat_id
    const result = await prisma.chat.findUniqueOrThrow({
        where: {
            id: chatId
        },
        include: {
            messages: {
                include: {
                    user: true
                }
            }
        }
    })
    const chat: Chat = {
        id: result.id,
        providerId: result.providerId,
        patientId: result.patientId,
        createdAt: result.createdAt,
        messages: result.messages.map((message) => ({
            id: message.id,
            chatId: message.chatId,
            userId: message.userId,
            text: message.text,
            createdAt: message.createAt
        })),
    }
    return NextResponse.json(chat)
}

export async function POST(request: Request) {
    const chat: Chat = await request.json()
    console.log("Chat created...")
    return NextResponse.json({status: 'ok'})
}
