import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // create one 
    const createPost = await prisma.post.create({
        data: {
            title: "This is title",
            content: "this is content",
            authorName: "sujon"
        }
    })
    // console.log(createPost);

    // create many 
    const createPostMany = await prisma.post.createMany({
        data: [
            {
                title: "This is title",
                content: "this is content",
                authorName: "sujon"
            },
            {
                title: "This is title2",
                content: "this is content2",
                authorName: "sujon2"
            }
        ]
    })
    // console.log(createPostMany); 
}

main()