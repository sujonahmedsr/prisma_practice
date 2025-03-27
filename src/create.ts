import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    // create user 
    const createUser = await prisma.user.create({
        data: {
            userName: "shoifqulIslam2",
            email: "shofiqul2@gmail.com",
            role: userRole.user
        }
    })
    // console.log(createUser);

    // create profile 
    const createProfile = await prisma.profile.create({
        data: {
            bio: "This is bio...",
            userId: 1
        }
    })
    // console.log(createProfile);

    // create category 
    const createCategory = await prisma.category.create({
        data: {
            name: "software engineering"
        }
    })
    // console.log(createCategory);

    // create post 
    const createPost = await prisma.post.create({
        data: {
            title: "this is title 5",
            content: "this is content of the post. 5",
            authorId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 1
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }
    })
    // console.log(createPost)
}

main()