'use server'
import {ExpertiseSchema} from "@/schemas";
import {z} from "zod";
import {db} from "@/backend/db";
import {Expertise} from "@/backend/db/schema";
import {revalidatePath} from "next/cache";

export const CreateExpertise = async (values: z.infer<typeof ExpertiseSchema>) => {
    const validatedFiled = ExpertiseSchema.safeParse(values)

    if (!validatedFiled.success) {
        return { error: 'Ошибка валидации. Пожалуйста, проверьте введенные данные.' }
    }

    if (validatedFiled.success) {
        try {
            const result = await db.insert(Expertise).values(validatedFiled.data).returning()
            // await new Promise(resolve => setTimeout(resolve, 500))

            const newExpertise = result[0].id.toString()
            revalidatePath('/expertises')
            revalidatePath(`/expertises/${newExpertise}`)

            return {
                success: "Экспертиза успешно создана, вы будуте перенаправлены на страницу через секунду..."
            }
        } catch (e) {
            const currentTime = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            console.error(`ERROR CREATING EXPERTISE ON ${currentTime} : `, e)
            return {error: `Непредвиденная ошибка... ${e}`}
        }
    }

}