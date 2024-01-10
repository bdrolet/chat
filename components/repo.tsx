import { Chat } from '@/components/types/chat';
import { Message } from '@/components/types/message';

// TODO: Set as a config value
const baseUrl = 'http://localhost:3001'

export async function GetChat(id: string) {
  const result = await fetch(`http://localhost:3001/api/chat/${id}`, { cache: 'no-store' })
  const chat: Chat = await result.json()
  return chat
}

export async function CreateChat(chat: Chat) {
  return await fetch(`${baseUrl}/api/chat/${chat.id}`, {
    method: 'POST',
    body: JSON.stringify(chat),
  })
}

export async function CreateMessage(message: Message) {
  return await fetch(`${baseUrl}/api/messages/${message.id}`, {
    method: 'POST',
    body: JSON.stringify(message),
  })
}