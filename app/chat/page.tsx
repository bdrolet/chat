import ChatPanel, { MessageProps } from "@/components/ui/chat_panel";
import { Chat } from "@/components/types/chat";
import { GetUserChats } from '@/components/chat_client';
import { UserContext } from "@/app/page";
import { useContext } from "react";
import { User } from "@/components/types/user";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = useContext<User | null>(UserContext)
  if (!currentUser) {
    return redirect('/')
  }
  const chat: Chat = await GetUserChats(userId)
  console.log('chat')
  console.log(chat)
  return (
    <ChatPanel
        chat={chat}
        currentUserid='123'
    />
  )
}

