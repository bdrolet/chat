
'use client'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import CSS from 'csstype'
import { useState } from 'react';
import { CreateMessage } from '@/components/chat_client'
import { nanoid } from 'nanoid'
import { Chat } from '@/components/types/chat'
import { Message } from '@/components/types/message'


export interface MessageProps {
    message: Message
    style?: CSS.Properties
}

export function Message(props: MessageProps) {
    return (
        <Row style={props.style}>
            <Col sm={2}>{props.message.userName}:</Col>
            <Col>{props.message.text}  </Col>
            <Col sm={3} style={{ textAlign: 'right' }}>{new Date(props.message.createdAt).toLocaleString()}</Col>
        </Row>
    )
}

export interface ChatProps {
    chat: Chat
    currentUserid: string
}
export default function ChatPanel(props: ChatProps) {
    const [messageText, setMessageText] = useState('');
    const initMessages: MessageProps[] = props.chat.messages ? props.chat.messages.map((message: Message) => ({
        message: {
            id: message.id,
            chatId: message.chatId,
            userId: message.userId,
            userName: message.userName,
            text: message.text,
            createdAt: message.createdAt
        }
    })) : []
    const [messages, setMessages] = useState<MessageProps[]>(initMessages)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            // Handle form submission here
            // You can access the message value using the 'message' state variable
            const message: Message = { 
                id: nanoid(), 
                userId: props.currentUserid,
                userName: props.currentUserid,
                chatId: props.chat.id,
                text: messageText,
                createdAt: new Date() 
            }
            // TODO: Handle Failures
            CreateMessage(message)
            const messageProp: MessageProps = {
                message: {
                    id: message.id,
                    chatId: message.chatId,
                    userId: message.userId,
                    userName: message.userName,
                    text: message.text,
                    createdAt: message.createdAt
                }
            }
            setMessages([...messages, messageProp])
            console.log('Form submitted:', messageText);
            setMessageText('')
        }
    };
    return (
        <Container fluid>
            <h4>Chat: {props.chat.providerName} | {props.chat.patientName}</h4>
            <Container className='mx-0 my-2'>
                {messages.map((mp, index) => (
                    <Message
                        key={mp.message.id}
                        message={mp.message}
                        style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}
                    />
                ))}
            </Container>
            <Form className="text-right">
                <div className="d-flex">
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        placeholder="Start a chat"
                        value={messageText}
                        onChange={(event) => setMessageText(event.target.value)}
                        onKeyDown={handleKeyDown}
                     />
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    )
}