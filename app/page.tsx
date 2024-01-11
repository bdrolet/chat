import Container from 'react-bootstrap/Container';
import { GetUsers } from '@/components/chat_client';
import { User, UserType } from '@/components/types/user';
import { UserCard } from '@/components/ui/users';

export default async function Home() {
    const users: User[] = await GetUsers()

    return (
        <Container>
            {users.map((user) => (
                <UserCard user={user} />
            ))}
        </Container>
    )
}