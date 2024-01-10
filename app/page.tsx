import { usePathname } from 'next/navigation'
import { nanoid } from 'nanoid'
import Chat, { MessageProps } from "@/components/chat";
import { ChatProps } from '@/components/chat';

export default function Home() {
  const id = nanoid()
  const messages: MessageProps[] = [
    { id: '1', text: 'Hello', user: 'Jon', timestamp: new Date() },
    { id: '2', text: 'How can I help you?', user: 'Dr. Gomez', timestamp: new Date() },
    { id: '3', text: 'I have some concerns about my previous visit...', user: 'Jon', timestamp: new Date() },
    { id: '4', text: 'Certainly, what are your concerns?', user: 'Dr. Gomez', timestamp: new Date() },
  ]
  createChat({ id, patient: 'Jon', provider: 'Dr. Gomez', messages })
  return (
    <Chat 
      id={id} 
      patient="Jon"
      provider='Dr. Gomez'
      messages={messages}
    />
  )
}

export async function createChat(chat: ChatProps) {
  const baseUrl = 'http://localhost:3001'
  return await fetch(`${baseUrl}/api/chat/${chat.id}`, {
    method: 'POST',
    body: JSON.stringify(chat),
  })
}