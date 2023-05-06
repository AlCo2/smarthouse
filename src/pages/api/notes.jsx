import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const notes = await prisma.notes.findMany()
    res.status(200).json(notes)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}