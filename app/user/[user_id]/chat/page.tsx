import ChatPanel from "@/components/ui/chat_panel";
import { GetChat, GetUser } from '@/components/chat_client';
import { Chat } from '@/components/types/chat';
import { User } from "@/components/types/user";

export default async function Home(context: { params: { user_id: number, chat_id: string } }) {
    const chatId: string = context.params.chat_id
    const userId: number = +context.params.user_id
    const user: User = await GetUser(userId)
    const chat: Chat = await GetChat(chatId)
    return (
      <ChatPanel
          chat={chat}
          currentUserid='123'
          currentUserName='Jon'
      />
    )
  }
