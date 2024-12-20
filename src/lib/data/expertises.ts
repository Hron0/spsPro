'use server'
import {ExpertiseSchema} from "@/schemas";
import {z} from "zod";
import {db} from "@/backend/db";
import {Expertise} from "@/backend/db/schema";
import { redirect } from 'next/navigation'

export const CreateExpertise = async (values: z.infer<typeof ExpertiseSchema>) => {
    const validatedFiled = ExpertiseSchema.safeParse(values)

    if (validatedFiled.success) {
        try {
            await db.insert(Expertise).values(validatedFiled.data)

            return {
                success: "Экспертиза успешно создана, вы будуте перенаправлены на страницу через секунду..."
            }
        } catch (e) {
            return {error: `Непредвиденная ошибка... ${e}`}
        }
    }

}