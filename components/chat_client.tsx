import { Chat } from '@/components/types/chat';
import { Message } from '@/components/types/message';
import { User } from '@/components/types/user';

// TODO: Set as a config value
const baseUrl = 'http://localhost:3001'

export async function GetUsers() {
  const result = await fetch(`${baseUrl}/api/user`, { cache: 'no-store' })
  const users: User[] = await result.json()
  return users
}

export async function GetUser(id: number) {
  const result = await fetch(`${baseUrl}/api/user/${id}`, { cache: 'no-store' })
  const user: User = await result.json()
  return user
}

export async function GetUserChats(userId: number) {
  const result = await fetch(`${baseUrl}/api/user/${userId}/chat/`, { cache: 'no-store' })
  const chats: Chat[] = await result.json()
  await Promise.all(chats.map(async (chat) => {
    const patient = await GetUser(chat.patientId)
    chat.patientName = patient.name
    const provider = await GetUser(chat.providerId)
    chat.providerName = provider.name
  }));
  return chats
}

export async function GetChat(id: string) {
  const result = await fetch(`http://localhost:3001/api/chat/${id}`, { cache: 'no-store' })
  const chat: Chat = await result.json()
  const patient: User = await GetUser(chat.patientId)
  const provider: User = await GetUser(chat.providerId)
  chat.patientName = patient.name
  chat.providerName = provider.name
  chat.messages?.forEach((message) => {
    message.userName = message.userId == patient.id ? patient.name : provider.name
  })
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