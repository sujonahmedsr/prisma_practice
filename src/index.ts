import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "this is content",
    //         authorName: "sujon"
    //     }
    // })
    // console.log(createPost);

}

main()