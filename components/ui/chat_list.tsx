'use client'
import Card from 'react-bootstrap/Card';
import { Chat } from '@/components/types/chat';
import { User } from '@/components/types/user';
import { FaRocketchat } from 'react-icons/fa6'
import Link from 'next/link';

export interface ChatSummaryProps {
    chat: Chat;
    currentUser: User;
}

export function ChatSummary(props: ChatSummaryProps) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>Chat: {props.chat.providerName} | {props.chat.patientName} <FaRocketchat /> </Card.Title>
                <Card.Subtitle>
                    {new Date(props.chat.createdAt).toLocaleString()}
                </Card.Subtitle>
                <Link href={`/user/${props.currentUser.id}/chat/${props.chat.id}`}> 
                    Go to chat
                </Link>
            </Card.Body>
        </Card>
    )
}