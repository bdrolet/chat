import { NextResponse } from "next/server"
import { Message } from "@/components/types/message";
import { Chat } from "@/components/types/chat";
import { nanoid } from "nanoid";

// NextResponse Documentation: https://nextjs.org/docs/app/api-reference/functions/next-response
// Dynamic Routes Documentation: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Routes Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function GET(request: Request, context: { params: { chat_id: string } }) {
    const chatId: string = context.params.chat_id
    const patientId: string = nanoid()
    const providerId: string = nanoid()
    const patientName: string = 'Jon'
    const providerName: string = 'Dr. Gomez'
    const messages: Message[] = [
        { id: nanoid(), chatId: chatId, text: 'Hello', userId: patientId, userName: patientName, createdAt: new Date() },
        { id: nanoid(), chatId: chatId, text: 'How can I help you?', userId: providerId, userName: providerName, createdAt: new Date() },
        { id: nanoid(), chatId: chatId, text: 'I have some concerns about my previous visit...', userId: patientId, userName: patientName, createdAt: new Date() },
        { id: nanoid(), chatId: chatId, text: 'Certainly, what are your concerns?', userId: providerId, userName: providerName, createdAt: new Date() },
    ]
    const chat: Chat = {
        id: chatId,
        providerId: providerId,
        providerName: providerName,
        patientId: patientId,
        patientName: patientName,
        messages: messages
    }
    return NextResponse.json(chat)
}

export async function POST(request: Request) {
    const chat: Chat = await request.json()
    console.log("Chat created...")
    return NextResponse.json({status: 'ok'})
}
