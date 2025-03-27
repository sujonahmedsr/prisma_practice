// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient()

// const main = async () => {
//     // find all 
//     const findAllPost = await prisma.post.findMany(
//         {
//             select: {
//                 authorName: true
//             }
//         }
//     )
//     // console.log(findAllPost);

//     // find first 
//     const findFirst = await prisma.post.findFirst({
//         where: {
//             id: 1
//         }
//     })
//     // console.log(findFirst);
    
//     // find unique 
//     const findUnique = await prisma.post.findUnique({
//         where: {
//             id: 2
//         }
//     })
//     // console.log(findUnique);
// }

// main()