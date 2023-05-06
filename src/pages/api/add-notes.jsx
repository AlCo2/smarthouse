import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method=='POST'){
        const {note_name, note_body} = req.body
        const note = await prisma.notes.create({
            data:{
                note_name, note_body,
            },
        })
        res.status(201).json(note);
    }else{
        res.status(405).json({message:'Method not allowed'})
    }
}