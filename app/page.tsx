import { nanoid } from 'nanoid'
import Chat, { MessageProps } from "@/components/chat";

export default function Home() {
  const id = nanoid()
  const messages: MessageProps[] = [
    { id: '1', text: 'Hello', user: 'User', timestamp: new Date() },
    { id: '2', text: 'Hi there!', user: 'Bot', timestamp: new Date() },
    { id: '3', text: 'How are you?', user: 'User', timestamp: new Date() },
    { id: '4', text: 'I am good, thanks!', user: 'Bot', timestamp: new Date() },
  ]
  return (
    <Chat id={id} messages={messages} />
  )
}