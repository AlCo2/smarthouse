import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function deleteNote(req, res){
    try {
        const {id} = req.query
        const note = await prisma.notes.delete({
        where: {
            id: parseInt(id),
        }
    })
    return res.status(200).json(note);
    }catch(error){
        return res.status(500).json({ message: 'Internal server error' })
    }
}