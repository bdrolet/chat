export interface Message {
    id: string
    chatId: string
    userId: number
    userName?: string
    text: string
    createdAt: Date
}