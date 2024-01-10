export interface Message {
    id: string
    chatId: string
    userId: string
    userName?: string
    text: string
    createdAt: Date
}