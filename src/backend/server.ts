import {desc, eq, sql} from 'drizzle-orm';
import {Hono} from "hono"
import {db} from "./db"
import {Expertise, Files, Posts} from "./db/schema"
import {formatDate} from "@/lib/functions/data-format";

// init app
export const app = new Hono().basePath("/api")


app.get("/expertise/:id", async ({req, json}) => {
    const id = parseInt(req.param('id'))

    const expertise = await db.query.Expertise.findFirst({
        where: eq(Expertise.id, id)
    })

    if (!expertise) {
        return json(
            {error: "Expertise not found"},
            {status: 404}
        )
    }

    return json(expertise)
})

// Для навигации
app.get("/expertises/short", async ({req, json}) => {
    const data = await db.select({
        id: Expertise.id,
        title: Expertise.title,
        date: Expertise.date,
    }).from(Expertise)

    const formattedExpertises = data.map(expertise => ({
        ...expertise,
        date: formatDate(expertise.date)
    }))

    return json(formattedExpertises)
})

// Для SSG генерации всех Экспертиз
app.get("/expertises/all", async ({req, json}) => {
    const data = await db.select({id: Expertise.id}).from(Expertise)

    return json(data)
})

const POSTS_PER_PAGE = 10

app.get("blog/posts", async ({req, json}) => {
    const page = Number(req.query("page") || "0");
    const limit = 10;

    const offset = (page - 1) * limit;

    const data = await db.query.Posts.findMany({
        with: {
            files: true,
        },
        orderBy: desc(Posts.createdAt),
        limit: limit + 1,
        offset: offset,
    })


    return json(data)
})