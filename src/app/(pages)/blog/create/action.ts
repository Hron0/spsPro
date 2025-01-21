"use server"

import {z} from "zod";
import {postSchema} from "@/schemas";
import {put} from "@vercel/blob";
import {db} from "@/backend/db";
import {Files, Posts} from "@/backend/db/schema";
import {revalidatePath} from "next/cache";

export const CreatePost = async (values: z.infer<typeof postSchema>) => {
    const validatedFields = postSchema.safeParse(values)

    if (validatedFields.success) {
        const {heading, text, image} = validatedFields.data
        const files = validatedFields.data.files as File[]

        try {
            let imgUrl = ""
            if (image && image.size > 0) {
                const {url} = await put(image.name, image, {access: "public"})
                imgUrl = url
            }
            console.log(validatedFields.data)
/*            const [Post] = await db.insert(Posts).values({heading, text, imgUrl}).returning()

            const filePromises = files.map(async (file) => {
                if (file.size > 0) {
                    const { url } = await put(file.name, file, { access: "public" })
                    return db.insert(Files).values({
                        postId: Post.id,
                        fileUrl: url,
                        fileName: file.name,
                    })
                }
            })

            await Promise.all(filePromises)*/

            revalidatePath("/blog")
        } catch (e) {
            const currentTime = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            console.error(`ERROR CREATING POST ON ${currentTime} : `, e)
            return {error: "Что-то пошло не так..."}
        }

    }
}