import { NextResponse } from "next/server"
import { Message } from "@/components/types/message";
import prisma from "@/lib/prisma";

// NextResponse Documentation: https://nextjs.org/docs/app/api-reference/functions/next-response
// Dynamic Routes Documentation: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Routes Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function POST(request: Request, context: { params: { message_id: string } }) {
    const message_id: string = context.params.message_id
    const message: Message = await request.json()
    await prisma.message.create({
        data: {
            id: message_id,
            chatId: message.chatId,
            userId: message.userId,
            text: message.text,
            createAt: message.createdAt
        }
    })  
    console.log("Message created...")
    console.log(message)
    return NextResponse.json({status: 'ok'})
}
