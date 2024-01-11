'use client'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import CSS from 'csstype'
import { useEffect, useState } from 'react';
import { CreateMessage, GetChat } from '@/components/chat_client'
import { nanoid } from 'nanoid'
import { Chat } from '@/components/types/chat'
import { Message } from '@/components/types/message'
import { User } from '@/components/types/user'

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
    currentUser: User
}
export default function ChatPanel(props: ChatProps) {
    // The lines below are for handling the automatic refresh of the chat panel
    // This sets the initial state of the messages
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
    // This useEffect hook will keep the messages up to date
    useEffect(() => {
        GetChat(props.chat.id).then((chat: Chat) => {
            setMessages(chat.messages ? chat.messages.map((message: Message) => ({
                message: {
                    id: message.id,
                    chatId: message.chatId,
                    userId: message.userId,
                    userName: message.userName,
                    text: message.text,
                    createdAt: message.createdAt
                }
            })) : [])
        })
    })
    // This handles the TextArea for the ChatPanel
    const postMessage = () => {
        // Handle form submission here
        // You can access the message value using the 'message' state variable
        const message: Message = { 
            id: nanoid(), 
            userId: props.currentUser.id,
            userName: props.currentUser.name,
            chatId: props.chat.id,
            text: messageText,
            createdAt: new Date()
        }
        // TODO: Handle Failures
        CreateMessage(message).catch((error) => {
            console.log(error)
        })
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
    // It keeps messageText up to date and listens for the Enter key
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            postMessage();
        }
    };
    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
        postMessage();
    }
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
                    <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    )
}