import { eq } from 'drizzle-orm';
import {Hono} from "hono"
import {db} from "./db"
import {Expertise} from "./db/schema"
import {formatDate} from "@/lib/functions/data-format";

// init app
export const app = new Hono().basePath("/api")

// ПОхуй?
app.get("/expertise/:id", async ({req, json}) => {
    const id = parseInt(req.param('id'))

    return json(
        await db.query.Expertise.findFirst({
            where: eq(Expertise.id, id)
        })
    )
})

// Для навигации
app.get("/expertises/short", async ({req, json}) => {
      const data = await db.select({
            id: Expertise.id,
            title: Expertise.title,
            date: Expertise.date ,
        }).from(Expertise)

    const formattedExpertises = data.map(expertise => ({
        ...expertise,
        date: formatDate(expertise.date)
    }))

    return json(formattedExpertises)
})

// Для SSG генерации всех Экспертиз
app.get("/expertises/all", async ({req, json}) => {
    const data = await db.select().from(Expertise)

    return json(data)
})
