import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const batchTransactions = async () => {
    const createUser = prisma.user.create({
        data: {
            userName: "sujon khan 1",
            email: "sujonOkay1@gmail.com"
        }
    })

    const updateUser = prisma.user.update({
        where: {
            id: 1
        },
        data: {
            age: 25
        }
    })

    const [userData, updatedUser] = await prisma.$transaction([
        createUser,
        updateUser
    ])

    console.log(userData, updatedUser);
    
}
batchTransactions()