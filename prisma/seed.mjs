import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'

const prisma = new PrismaClient()


async function main() {
    const patient1 = await prisma.user.create({
        data: {
            name: 'Jon',
            isProvider: false,
            createAt: new Date(),
        },
    })
    const provider1 = await prisma.user.create({
        data: {
            name: 'Dr. Gomez',
            isProvider: true,
            createAt: new Date(),
        },
    })
    const patient2 = await prisma.user.create({
      data: {
          name: 'Jane',
          isProvider: false,
          createAt: new Date(),
      },
    })
    const provider2 = await prisma.user.create({
        data: {
            name: 'Dr. Sanchez',
            isProvider: true,
            createAt: new Date(),
        },
    })
    const chat = await prisma.chat.createMany({
        data: [
        {
          id: nanoid(),
          patientId: patient1.id,
          providerId: provider1.id,
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          patientId: patient1.id,
          providerId: provider2.id,
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          patientId: patient2.id,
          providerId: provider1.id,
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          patientId: patient2.id,
          providerId: provider2.id,
          createdAt: new Date(),
        },
      ]
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })