import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const main = async()=>{
    const group = await prisma.user.groupBy({
        by: ["userName", "age", "role"],
        _count:{
            age: true
        },
        where: {
            email: "shofiqul@gmail.com"
        }
    })
    console.log(group);
}
main()