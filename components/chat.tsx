
'use client'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import CSS from 'csstype'

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
            <Col>{user}: {text}  </Col>
            <Col style={{ textAlign: 'right' }}>{new Date(timestamp).toLocaleString()}</Col>
        </Row>
    )
}

export interface ChatProps {
    id: string
    messages: MessageProps[]
}
export default function Chat({ id, messages }: ChatProps) {
    return (
        <Container fluid>
            <Container className='mx-0'>
                {messages.map((message, index) => (
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
                    <Form.Control type="text" placeholder="Enter message" />
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    )
}