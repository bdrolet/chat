import ChatPanel from "@/components/chat";
import { GetChat } from '@/components/repo';
import { Chat } from '@/components/types/chat';

export default async function Home(context: { params: { chat_id: string } }) {
    const chatId: string = context.params.chat_id
    const chat: Chat = await GetChat(chatId)
    console.log('chat')
    console.log(chat)
    return (
      <ChatPanel
          chat={chat}
          currentUserid='123'
      />
    )
  }
