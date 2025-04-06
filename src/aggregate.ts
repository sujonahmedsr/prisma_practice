import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()
const main = async () => {
    // avg 
    const avgAge = await prisma.user.aggregate(
        {
            _avg: {
                age: true
            }
        }
    )
    // sum 
    const sumOfAfe = await prisma.user.aggregate(
        {
            _sum: {
                age: true
            }
        }
    )
    // find 
    const countUser = await prisma.user.count()
    // max and min 
    const maxUser = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })
    console.log(maxUser);
}
main()