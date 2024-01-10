import { nanoid } from 'nanoid'
import Chat, { MessageProps } from "@/components/chat";

export default function Home() {
  const id = nanoid()
  const messages: MessageProps[] = [
    { id: '1', text: 'Hello', user: 'Jon', timestamp: new Date() },
    { id: '2', text: 'How can I help you?', user: 'Dr. Gomez', timestamp: new Date() },
    { id: '3', text: 'I have some concerns about my previous visit...', user: 'Jon', timestamp: new Date() },
    { id: '4', text: 'Certainly, what are your concerns?', user: 'Dr. Gomez', timestamp: new Date() },
  ]
  return (
    <Chat 
      id={id} 
      patient="Jon"
      provider='Dr. Gomez'
      messages={messages}
    />
  )
}