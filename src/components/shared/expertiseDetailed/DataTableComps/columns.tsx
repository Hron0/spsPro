"use client"
import {ColumnDef} from "@tanstack/react-table"

export type Expertise = {
    id: number
    title: string
}

export const columns: ColumnDef<Expertise>[] = [
    {
        accessorKey: "title",
        header: "Название",
    },


]