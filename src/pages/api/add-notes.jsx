import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method=='POST'){
        const {name, body,userId} = req.body
        const note = await prisma.notes.create({
            data:{
                name, body,userId
            },
        })
        res.status(201).json(note);
    }else{
        res.status(405).json({message:'Method not allowed'})
    }
}