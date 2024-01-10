// https://nextjs.org/docs/app/api-reference/file-conventions/route

import { NextResponse } from "next/server"
import { MessageProps } from "@/components/chat";
import { ChatProps } from "@/components/chat";

// NextResponse Documentation: https://nextjs.org/docs/app/api-reference/functions/next-response
// Dynamic Routes Documentation: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

export async function GET(request: Request, context: { params: { chat_id: string }  }) {
    const messages: MessageProps[] = [
        { id: '1', text: 'Hello', user: 'Jon', timestamp: new Date() },
        { id: '2', text: 'How can I help you?', user: 'Dr. Gomez', timestamp: new Date() },
        { id: '3', text: 'I have some concerns about my previous visit...', user: 'Jon', timestamp: new Date() },
        { id: '4', text: 'Certainly, what are your concerns?', user: 'Dr. Gomez', timestamp: new Date() },
    ]
    const chat: ChatProps = {
        id: '1',
        patient: 'Jon',
        provider: 'Dr. Gomez',
        messages: messages
    }   
    const chat_id: string = context.params.chat_id
    return NextResponse.json(chat)
}

export async function POST(request: Request) {
    const chat: ChatProps = await request.json()
    console.log(chat)
    return NextResponse.json({status: 'ok'})
}
