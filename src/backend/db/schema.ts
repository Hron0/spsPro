import {
    boolean, date, jsonb,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm";
export const roles = pgEnum('roles', ["USER", "ADMIN"])

export const user = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    login: text("login").unique(),
    password: text('password'),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", {mode: "date"}),
    role: roles('role').default('USER'),
    image: text("image"),
})


export const TodoTable = pgTable("todos", {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
})

export const Expertise = pgTable('expertise', {
    id: serial('id').primaryKey(),
    title: text('title'),
    name: text('name'),
    against: text('against'),
    case: text('case'),
    city: text('city'),
    address: text('address'),
    questions: jsonb('questions'),
    types: text('types'),
    date: date('date', {mode: "date"}).default(sql`now()`),
    img: text('img'),
})