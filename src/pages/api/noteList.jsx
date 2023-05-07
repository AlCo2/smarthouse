import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === 'GET' && session) {
    const notes = await prisma.notes.findMany({
      where:{
        userId: session.user.id
      }
    })
    res.status(200).json(notes)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}