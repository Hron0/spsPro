'use server'
import React from 'react';
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

async function Page({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const Items = [
        {id: 1, name: "Пример"},
        {id: 2, name: "Что-то"},
        {id: 3, name: "Бляяяя"},
        {id: 4, name: "ЛОООООЛ"},
        {id: 5, name: "Хуйхуйхуй"},
    ]

    return (
        <div className={'py-[20%] flex flex-col items-center justify-center'}>
                {id
                    ? <Badge variant={"secondary"}>ID == {id}</Badge>
                    : <Badge variant={"destructive"}>Нет инфы Dog</Badge>
                }
                <div className={'p-20 flex flex-col items-start bg-gray-100'}>
                    {Items.map((item, index) => (
                        <Link href={`/expertises/${item.id}`} key={index} className={'hover:underline'}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            <Link href="/expertises/create" className="hover:underline text-xl text-red-500">
                CREATE
            </Link>
        </div>
    );
}

export default Page;