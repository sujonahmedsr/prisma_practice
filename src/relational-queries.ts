import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {

    // fluent api
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        },
    }).Post();

    const result1 = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            Post: true
        }
    });

    const publishedUser = await prisma.user.findMany({
        include: {
            Post: {
                where: {
                    published: true
                }
            }
        }
    })

    console.dir(publishedUser, {depth: Infinity});
    

};

relationalQueries();