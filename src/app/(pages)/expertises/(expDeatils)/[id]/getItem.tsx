"use server"

import {db} from "@/backend/db";
import {Expertises} from "@/backend/db/schema";
import {eq} from "drizzle-orm";

export async function getItem(id:string) {
    let idD = Number(id)

    const data = await db.select({
        id: Expertises.id,
        title: Expertises.title,
        case: Expertises.case,
    }).from(Expertises)
        .where(eq(Expertises.id, idD))
        .limit(1)

    return data
}