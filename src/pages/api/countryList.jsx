import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === 'GET' && session) {
    const countries = await prisma.countries.findMany();
    res.status(200).json(countries)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}