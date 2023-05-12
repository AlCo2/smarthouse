import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method=='POST'){
        const {id,name,firstName, lastName, email, phone,bio, country, city, postalCode} = req.body
        const user = await prisma.user.update({
            where:{
                id:id
            },
            data:{
                name:name,
                firstName:firstName,
                lastName:lastName,
                email:email,
                phone:phone,
                bio:bio,
                country:country,
                city:city,
                postalCode:postalCode,
            },
        })
        res.status(201).json(user);
    }else{
        res.status(405).json({message:'Method not allowed'})
    }
}