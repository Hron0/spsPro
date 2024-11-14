import {
    boolean,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp
  } from "drizzle-orm/pg-core"
  
  export const roles = pgEnum('roles', ["USER", "ADMIN"])
  
  export const user = pgTable("user", {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    login: text("login"),
    password: text('password'),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    role: roles('role').default('USER'),
    image: text("image"),
  })
  
  
  export const TodoTable = pgTable("todos", {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
  })