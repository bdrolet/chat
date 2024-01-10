
'use client'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import CSS from 'csstype'
import { useState } from 'react';


export interface MessageProps {
    id: string
    text: string
    user: string
    timestamp: Date
    style?: CSS.Properties
}

export function Message({ id, text, user, timestamp, style }: MessageProps) {
    return (
        <Row style={style}>
            <Col sm={2}>{user}:</Col>
            <Col>{text}  </Col>
            <Col sm={3} style={{ textAlign: 'right' }}>{new Date(timestamp).toLocaleString()}</Col>
        </Row>
    )
}

export interface ChatProps {
    id: string
    provider: string
    patient: string
    messages: MessageProps[]
}
export default function Chat({ id, patient, provider, messages }: ChatProps) {
    const [message, setMessage] = useState('');
    const [messagesContext, setMessages] = useState<MessageProps[]>(messages);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            // Handle form submission here
            // You can access the message value using the 'message' state variable
            setMessages([...messagesContext, { id: '5', user: 'User', text: message, timestamp: new Date() }])
            console.log('Form submitted:', message);
            setMessage('')
        }
    };
    return (
        <Container fluid>
            <h4>Chat: {provider} | {patient}</h4>
            <Container className='mx-0 my-2'>
                {messagesContext.map((message, index) => (
                    <Message
                        key={message.id}
                        id={message.id}
                        text={message.text}
                        user={message.user}
                        timestamp={message.timestamp}
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
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
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