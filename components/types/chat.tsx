import { Message } from "@/components/types/message";

export interface Chat{
    id: string
    providerId: number
    providerName?: string
    patientId: number
    patientName?: string
    messages?: Message[]
}