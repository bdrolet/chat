import { NextResponse } from "next/server"
import { MessageProps } from "@/components/chat";

// NextResponse Documentation: https://nextjs.org/docs/app/api-reference/functions/next-response
// Dynamic Routes Documentation: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
// Routes Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/route

export async function POST(request: Request) {
    const message: MessageProps = await request.json()
    console.log(message)
    return NextResponse.json({status: 'ok'})
}
