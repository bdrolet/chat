import { NextResponse } from "next/server"
import { Message } from "@/components/types/message";

// NextResponse Documentation: https://nextjs.org/docs/app/api-reference/functions/next-response
// Dynamic Routes Documentation: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Routes Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function POST(request: Request) {
    const message: Message = await request.json()
    console.log("Message created...")
    console.log(message)
    return NextResponse.json({status: 'ok'})
}
