import Container from 'react-bootstrap/Container';
import { GetUser, GetUserChats } from '@/components/chat_client';
import { Chat } from '@/components/types/chat';
import { User, UserType } from '@/components/types/user';
import { ChatSummary } from '@/components/ui/chat_list';

export default async function ChatList(context: { params: { user_id: number } }) {
    const userId: number = +context.params.user_id
    const user: User = await GetUser(userId)
    const chats: Chat[] = await GetUserChats(user.id)
    return (
        <Container className='my-2'>
            <h1>Chats for {user.name}</h1>
            {chats.map((chat) => (
                <ChatSummary chat={chat} currentUser={user} />
            ))}
        </Container>
    )
}