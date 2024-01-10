import { usePathname } from 'next/navigation'
import { nanoid } from 'nanoid'
import ChatPanel, { MessageProps } from "@/components/chat";
import { CreateChat } from '@/components/repo';

// TODO: Decide what to do with this page.
export default function Home() {
  const id = nanoid()
  // CreateChat({ id, patientName: 'Jon', provider: 'Dr. Gomez' })
  return (
    <ChatPanel
      currentUserid='123'
      chat={{ id: id, patientId: 'Jon', providerId: 'Dr. Gomez'} }
    />
  )
}

