import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const interActive = async () => {
    const result = await prisma.$transaction(async (tx) => {
        // query 1 
        const getAllUser = await tx.user.findMany({
            where: {
                age: {
                    gt: 20
                }
            }
        })
        // query 2 
        const postCount = await tx.post.count()

        // query 3 
        const userUpdated = await tx.user.update({
            where: {
                id: 1
            },
            data: {
                userName: "rumana"
            }
        })

        return {
            getAllUser,
            postCount,
            userUpdated
        }
    })
    console.log(result, 'from interactive');
    
}
interActive()