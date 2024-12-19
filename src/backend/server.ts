import { eq } from 'drizzle-orm';
import {Hono} from "hono"
import {db} from "./db"
import {Expertise, TodoTable} from "./db/schema"

// init app
export const app = new Hono().basePath("/api")

// get all todos
/*app.get("/todos", async ({req, json}) => {
    const {filter} = req.query()
    switch (filter) {
        case "all":
            return json(
                await db.select().from(TodoTable).orderBy(desc(TodoTable.createdAt))
            )
        case "done":
            return json(
                await db.select().from(TodoTable).where(eq(TodoTable.done, true))
            )
        case "undone":
            return json(
                await db.select().from(TodoTable).where(eq(TodoTable.done, false))
            )
    }
})*/

app.get("/expertise/:id", async ({req, json}) => {
    const id = parseInt(req.param('id'))

    return json(
        await db.query.Expertise.findFirst({
            where: eq(Expertise.id, id)
        })
    )
})

app.get("/expertises/all", async ({req, json}) => {
    return json(
        await db.select({
            id: Expertise.id,
            title: Expertise.title,
        }).from(Expertise)
    )
})
