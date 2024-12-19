"use client"
import {ColumnDef, flexRender} from "@tanstack/react-table"
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export type Expertise = {
    id: number
    title: string
    date: string
}

export const columns: ColumnDef<Expertise>[] = [
    {
        accessorKey: "title",
        header: "Название",
        cell: ({row}) => {
            const id = row.original.id
            return (
                <Link href={`/expertises/${id}`} className={'flex flex-row items-center gap-2'}>
                    <Image src={'/img/folder.svg'} alt={'.'} width={40} height={40}
                           className={'text-black'}/>
                    {row.getValue('title')}
                </Link>
            )
        }
    },
    {
        accessorKey: "date",
        header: "Дата"
    },
]