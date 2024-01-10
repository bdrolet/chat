import { Message } from "@/components/types/message";

export interface Chat{
    id: string
    providerId: string
    providerName?: string
    patientId: string
    patientName?: string
    messages?: Message[]
}