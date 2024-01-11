import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const patient = await prisma.user.create({
        data: {
            name: 'Jon',
            isProvider: true,
            createAt: new Date(),
        },
    })
    const provider = await prisma.user.create({
        data: {
            name: 'Dr. Gomez',
            isProvider: true,
            createAt: new Date(),
        },
    })
    console.log("Patient created...", patient)
    console.log("Provided created...", provider)
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